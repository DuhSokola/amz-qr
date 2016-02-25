;(function () {
    'use strict';

    var dependencies = [
        'app.carResource',
        'app.leadResource',
        'blockUI'
    ];

    var app = angular.module('app.contactForm.ctrl', dependencies);

    app.controller('ContactFormCtrl', ['$rootScope', '$scope', '$translate', '$stateParams', 'LeadResource', function ($rootScope, $scope, $translate, $stateParams,LeadResource) {

        $rootScope.global.params.selectedBrand = $stateParams.brand;
        $rootScope.global.params.selectedModel = $stateParams.model;
        $rootScope.global.params.selectedModelVariant = $stateParams.modelVariant;
        $rootScope.global.params.selectedMode = $stateParams.mode;


        $scope.emailPattern = '^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$';

        $scope.salutations = [
            {
                translation: 'CONTACT_SALUTATION_MR',
                value: 'MR'
            }
            , {
                translation: 'CONTACT_SALUTATION_MRS',
                value: 'MRS'
            }];

        $scope.salutationIsValid = '';

        $scope.data = {
            salutation: '',
            firstName: '',
            lastName: '',
            street: '',
            streetNr: '',
            zip: '',
            city: '',
            telephone: '',
            email: '',
            catalog: $stateParams.mode == 'catalog',
            catalogTyp: ($stateParams.mode == 'catalog')? 'electronic':'',
            testdrive: $stateParams.mode == 'testdrive' || $stateParams.mode == 'leasing',
            testdriveTyp: '',
            leasing: '',
            leasingTyp: '',
            privacyAccepted: '',
            newsletter: true,
            brand: $rootScope.global.params.selectedBrand
        };
        
        var setErrorChkbox = function (id) {
            id = '#' + id;
            $(id).removeClass('md-primary');
            $(id).addClass('error-checkbox');
            $(id).addClass('error-text');
        };

        var setNormalChkbox = function (id) {
            id = '#' + id;
            $(id).removeClass('error-text');
            $(id).removeClass('error-checkbox');
            $(id).addClass('md-primary');
        };

        var setErrorRadio = function (name) {
            var query = 'md-radio-button[name=' + name + ']';
            $(query).removeClass('md-primary');
            $(query).addClass('error-radio');
            $(query).addClass('error-text');
        };

        var setNormalRadio = function (name) {
            var query = 'md-radio-button[name=' + name + ']';
            $(query).removeClass('error-text');
            $(query).removeClass('error-radio');
            $(query).addClass('md-primary');
        };

        $scope.validate = function () {
            var isValid = true;
            if (!$scope.data.salutation || $scope.data.salutation == '') {
                $scope.salutationIsValid = false;
                $('#selectSalutation').addClass('error-input');
                isValid = false;
            }

            if (!$scope.data.catalog && !$scope.data.testdrive && !$scope.data.leasing) {
                setErrorChkbox('checkbox-catalog');
                setErrorChkbox('checkbox-testdrive');
                setErrorChkbox('checkbox-leasing');
                isValid = false;
            }

            if ($scope.data.catalog && !$scope.data.catalogTyp) {
                setErrorRadio('radio-catalog');
                isValid = false;
            }
            if (!$scope.data.testdrive) {
                setErrorRadio('radio-testdrive');
                isValid = false;
            }
            if ($scope.data.leasing && !$scope.data.leasingTyp) {
                setErrorRadio('radio-leasing');
                isValid = false;
            }
            if (!$scope.data.privacyAccepted) {
                setErrorChkbox('checkbox-privacy');
                isValid = false;
            } else {
                setNormalChkbox('checkbox-privacy');
            }

            if (!$scope.data.firstName || $scope.data.firstName == '') {
                isValid = false;
            }

            if (!$scope.data.lastName || $scope.data.lastName == '') {
                isValid = false;
            }

            if (!$scope.data.street || $scope.data.street == '') {
                isValid = false;
            }

            if (!$scope.data.streetNr || $scope.data.streetNr == '') {
                isValid = false;
            }

            if (!$scope.data.zip || $scope.data.zip == '') {
                isValid = false;
            }

            if (!$scope.data.city || $scope.data.city == '') {
                isValid = false;
            }

            if (!$scope.data.telephone || $scope.data.telephone == '') {
                isValid = false;
            }

            if (!$scope.data.email || $scope.data.email == '' || !(new RegExp($scope.emailPattern).test($scope.data.email))) {
                isValid = false;
            }

            return isValid;
        };

        $scope.submit = function () {
            if ($scope.validate()) {
                console.log('valid');
                console.log($scope.data);
                $scope.data.option = $rootScope.global.params.selectedModelVariantObj.versionList[0].id;
                LeadResource.persist($scope.data);
                return true;
            } else {
                console.log('invalid');
                return false;
            }
        };

        //<-- Event - Listeners -->

        $scope.$watch('data.privacyAccepted', function (newVal) {
            if (!newVal && newVal !== '') {
                setErrorChkbox('checkbox-privacy');
            } else {
                setNormalChkbox('checkbox-privacy');
            }
        });

        $scope.$watch('data.catalog', function (newVal) {
            if (!newVal && newVal != '') {
                $scope.data.catalogTyp = false;
            }
            else {
                setNormalChkbox('checkbox-catalog');
                setNormalChkbox('checkbox-testdrive');
                setNormalChkbox('checkbox-leasing');
            }
        });

        $scope.$watch('data.testdrive', function (newVal) {
            if (!newVal) {
                $scope.data.testdriveTyp = false;
            } else {
                setNormalChkbox('checkbox-catalog');
                setNormalChkbox('checkbox-testdrive');
                setNormalChkbox('checkbox-leasing');
            }
        });

        $scope.$watch('data.leasing', function (newVal) {
            if (!newVal) {
                $scope.data.leasingTyp = false;
            } else {
                setNormalChkbox('checkbox-catalog');
                setNormalChkbox('checkbox-testdrive');
                setNormalChkbox('checkbox-leasing');
            }
        });

        $scope.$watch('data.catalogTyp', function (newVal) {
            if (newVal || $scope.data.catalog) {
                setNormalRadio('radio-catalog')
            }
        });

        $scope.$watch('data.testdriveTyp', function (newVal) {
            if (newVal || $scope.data.catalog) {
                setNormalRadio('radio-testdrive')
            }
        });
        $scope.$watch('data.leasingTyp', function (newVal) {
            if (newVal || $scope.data.catalog) {
                setNormalRadio('radio-leasing')
            }
        });

        //WORKAROUNDS of Select bug with placeholder translation and Errorhandling
        $rootScope.$on('$translateChangeEnd', function () {
            $translate('CONTACT_SALUTATION').then(function (trans) {
                $('#selectSalutation').find('md-select-value').find('span').first().text(trans);
            });
        });

        $('#selectSalutation').mouseup(function () {
            if ($scope.data.salutation != $scope.salutations[0].value && $scope.data.salutation != $scope.salutations[1].value) {
                $scope.salutationIsValid = false;
                $('#selectSalutation').addClass('error-input');
            }
        });

        $scope.salutationSelect = function () {
            $scope.salutationIsValid = true;
            $('#selectSalutation').removeClass('error-input');
        };


    }]);

}());