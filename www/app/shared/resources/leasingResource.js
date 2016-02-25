;(function(){
    'use strict';

    var deps = [
        'ngResource'
    ];

    var app = angular.module('app.leasingResource',deps);

    app.factory('LeasingData',['$rootScope','$resource',function($rootScope, $resource){
        return $resource($rootScope.leasingApi);
    }]);

    app.factory('LeasingDataResource',['LeasingData', function(LeasingData){

        var getLeasingCalculation = function(query, success,error){
            return success({"interestRateNominal":"5.40","interestRateEffective":"5.54","monthlyInterest":"897.69"});
            //return LeasingData.get(query,success,error);
        };
        return {
            getLeasingCalculation: getLeasingCalculation
        };
    }]);

    /*-----------------------------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------------------------*/

    app.factory('LeasingPromotionDataResource',['$rootScope','$http', function($rootScope, $http){
        var getLeasingPromotions = function(model,success,error){
            var obj = {data:[{"id":"0001_0","description":"P1 Satz","interestRate":"5.40","maxKilometerPerYear":"250000","runningTimeFrom":"6","runningTimeTo":"60","specialPayment":"","validTo":"31. Dezember 2020","nfaFrom":"8000.00","nfaTo":"999999.00"},{"id":"0001_1","description":"P1 Satz","interestRate":"6.95","maxKilometerPerYear":"250000","runningTimeFrom":"6","runningTimeTo":"60","specialPayment":"","validTo":"31. Dezember 2020","nfaFrom":"","nfaTo":"7999.00"},{"id":"1234","description":"Leasingaktion Generell 3.9%","interestRate":"3.90","maxKilometerPerYear":"250000","runningTimeFrom":"12","runningTimeTo":"48","specialPayment":"","validTo":"29. Februar 2016","nfaFrom":"8000.00","nfaTo":"999999.00"}]};
            return success(obj);
            //return $http.get($rootScope.leasingPromotionApi+'/'+model+'_.json').then(success,error);
        };
        return {
            getLeasingPromotions: getLeasingPromotions
        };
    }]);

}());