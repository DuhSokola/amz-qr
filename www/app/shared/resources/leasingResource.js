;(function () {
    'use strict';

    var deps = [
        'ngResource'
    ];

    var app = angular.module('app.leasingResource', deps);

    app.factory('LeasingData', ['$rootScope', '$resource', function ($rootScope, $resource) {
        return $resource($rootScope.leasingApi, {},
            {
                fetch: {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json, text/javascript',
                        'Accept-Encoding': 'utf-8',
                        'Content-Type': 'application/json; charset=utf-8'
                    }
                }
            });
    }]);

    app.factory('LeasingDataResource', ['LeasingData', function (LeasingData) {

        var getLeasingCalculation = function (query, success, error) {
            return LeasingData.get(query, success, error);
        };
        return {
            getLeasingCalculation: getLeasingCalculation
        };
    }]);

    /*-----------------------------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------------------------*/
    /*-----------------------------------------------------------------------------------------------------*/

    app.factory('LeasingPromotionDataResource', ['$rootScope', '$http', '$translate', function ($rootScope, $http, $translate) {
        var getLeasingPromotions = function (model, success, error) {
            if (model) {
                return $http.get($rootScope.leasingPromotionApi + '?carCode=' + model.versionList[0].id + '&lang=' + $translate.use().toLowerCase()).then(success, error);
            }
        };
        return {
            getLeasingPromotions: getLeasingPromotions
        };
    }]);

}());