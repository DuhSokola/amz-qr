;(function(){
    'use strict';

    var deps = [
        'ngResource'
    ];

    var app = angular.module('app.carResource',deps);

    app.factory('Car',['$rootScope','$resource',function($rootScope, $resource){
        return $resource($rootScope.carsApi + '/readallmodel');
    }]);

    app.factory('CarResource',['Car', function(Car){
        var getByBrand = function(brand, success,error){
            return Car.get({'brand': brand, lang:'de'},success,error);
        };
        return {
            getByBrand: getByBrand
        };
    }]);

}());