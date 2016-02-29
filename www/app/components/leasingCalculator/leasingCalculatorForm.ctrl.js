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
        $scope.data.discountList = [];
        $scope.result = '-';

        $scope.$watch('data.discountList',function(values, newval, oldval){
            console.log(values);
            console.log(newval);
            console.log(oldval);
        },true);

        $scope.calculate = function () {
            for(var i=0;i<$scope.data.discountList.length;i++){
                $scope.data.discount = $scope.data.discountList[i] ? true:false;
                if($scope.data.discount){
                    $scope.data.discountRate = $rootScope.global.params.leasingPromotions[i].interestRate;
                    break;
                }
            }

            LeasingDataResource.getLeasingCalculation({
                carCode: $rootScope.global.params.selectedModelVariantObj.versionList[0].id,
                interestRate: $scope.data.discount ? $scope.data.discountRate : $scope.data.interestRateDefault,
                specialPayment: $scope.data.payment,
                totalAmount: $scope.data.basePrice + $scope.data.payment,
                months: $scope.data.duration,
                kmPerYear: $scope.data.milage
            }, function (result) {
                console.log(result);
                $scope.result = result.monthlyInterest;
            }, function () {
                console.log('err');
                $scope.result = 7777;
            });
        };;

    }]);

}());