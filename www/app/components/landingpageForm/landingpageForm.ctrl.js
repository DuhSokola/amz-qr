;(function () {
    'use strict';

    var dependencies = [];

    var app = angular.module('app.landingPageForm.ctrl', dependencies);

    app.controller('LandingPageFormCtrl', ['$rootScope', '$scope', '$translate', '$state', '$stateParams', function ($rootScope, $scope, $translate, $state, $stateParams) {
        $rootScope.global.params.selectedBrand = $stateParams.brand;
        $rootScope.global.params.selectedModel = $stateParams.model;
        $rootScope.global.params.selectedModelVariant = $stateParams.modelVariant;
        $rootScope.global.params.selectedMode = null;

    }]);

}());