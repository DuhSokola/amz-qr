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
            return LeasingData.get(query,success,error);
        };
        return {
            getLeasingCalculation: getLeasingCalculation
        };
    }]);

    /*-----------------------------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------------------------*/

    app.factory('LeasingPromotionDataResource',['$rootScope','$http','$translate', function($rootScope, $http, $translate){
        var getLeasingPromotions = function(model,success,error){
            return $http.get($rootScope.leasingPromotionApi+'?carCode='+model.versionList[0].id+'&lang='+$translate.use().toLowerCase()).then(success,error);
        };
        return {
            getLeasingPromotions: getLeasingPromotions
        };
    }]);

}());