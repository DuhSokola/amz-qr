;(function () {
    'use strict';

    var dependencies = [];

    var app = angular.module('app.variantList.ctrl', dependencies);

    app.controller('VariantListCtrl', ['$rootScope', '$scope', '$state', '$stateParams', function ($rootScope, $scope, $state, $stateParams) {

        $rootScope.global.params.selectedBrand = $stateParams.brand;
        $rootScope.global.params.selectedModel = $stateParams.model;
        $rootScope.global.params.selectedModelVariant = $stateParams.modelVariant;

    }]);

}());