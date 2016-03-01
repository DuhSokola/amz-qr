;(function () {
    'use strict';

    var dependencies = [
        'app.leasingResource'
    ];

    var app = angular.module('app.leasingCalculatorForm.ctrl', dependencies);

    app.controller('LeasingCalculatorFormCtrl', ['$rootScope', '$scope', '$stateParams', 'LeasingDataResource', function ($rootScope, $scope, $stateParams, LeasingDataResource) {

        $rootScope.global.params.selectedBrand = $stateParams.brand;
        $rootScope.global.params.selectedModel = $stateParams.model;
        $rootScope.global.params.selectedModelVariant = $stateParams.modelVariant;
        $rootScope.global.params.selectedMode = null;



        $scope.data = {};
        $rootScope.$watch('global.params.selectedModelVariantObj', function () {
            if ($rootScope.global.params.selectedModelVariantObj) {
                $scope.data.basePrice = parseInt($rootScope.global.params.selectedModelVariantObj.versionList[0].price);
            }
        });
        $scope.data.payment = 0;
        $scope.data.duration = 12;
        $scope.data.milage = 10000;
        $scope.data.interestRateDefault = '5.40';
        $scope.data.interestRateEffektive = parseFloat($scope.data.interestRateDefault) + 0.05;
        $scope.data.discountRate = undefined;
        $scope.result = '-';

        $("fieldset.standard.contact-fieldset.layout-row").css("padding-top","5px");

        $scope.calculate = function () {
            console.log($scope.data.discountRate);
            if($scope.data.discountRate != undefined && $scope.data.discountRate != 'undefined'){
                $scope.data.discountRateD = jQuery.parseJSON($scope.data.discountRate);
            }else{
                $scope.data.discountRateD = undefined;
            }

            LeasingDataResource.getLeasingCalculation({
                carCode: $rootScope.global.params.selectedModelVariantObj.versionList[0].id,
                interestRate: $scope.data.discountRateD != undefined ? $scope.data.discountRateD.interestRate : $scope.data.interestRateDefault,
                specialPayment: $scope.data.payment,
                totalAmount: $scope.data.basePrice + $scope.data.payment,
                months: $scope.data.duration,
                kmPerYear: $scope.data.milage
            }, function (result) {
                console.log(result);
                $scope.result = result.monthlyInterest;
            }, function () {
                console.log('err');
            });
        };

    }]);

}());