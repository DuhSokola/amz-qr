;(function () {
    'use strict';

    var dependencies = [
        'app.carDataReader'
    ];

    var app = angular.module('app.imageArea.ctrl', dependencies);

    app.controller('ImageAreaCtrl', ['$rootScope', '$scope', '$state', '$stateParams', function ($rootScope, $scope) {

        $rootScope.$watch('global.params.selectedModelVariantObj', function (val) {
            if ($rootScope.global.params.selectedModelVariantObj) {
                $scope.imageUrl = $rootScope.carsApi + $rootScope.global.params.selectedModelVariantObj.picturePaths[0];
            }
        });

    }]);

}());