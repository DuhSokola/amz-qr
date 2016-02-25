;(function () {
    'use strict';

    var dependencies = [
        'app.modelList'
    ];

    var app = angular.module('app.modelList.ctrl', dependencies);

    app.controller('ModelListCtrl', ['$rootScope', '$scope', '$state', 'CarResource','$stateParams', function ($rootScope, $scope, $state, CarResource, $stateParams) {

        $rootScope.global.params.selectedBrand = $stateParams.brand;

        CarResource.getByBrand($stateParams.brand, function (response) {
                console.log(333);
                console.log(response);
                $rootScope.global.cars = {
                    brand: response.brand,
                    models: response.models
                };
            },
            function (error) {
                console.log('ERROR');
            });

        $scope.route = function (selectedModel) {
            $state.go('landingPage',{
                brand:$stateParams.brand,
                model:selectedModel
            });
        }

    }]);

}());