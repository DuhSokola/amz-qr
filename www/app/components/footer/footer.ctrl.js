;(function () {
    'use strict';

    var dependencies = [];

    var app = angular.module('app.footer.ctrl', dependencies);

    app.controller('FooterCtrl', ['$rootScope', '$scope', '$state', '$stateParams', function($scope){
        $scope.route = function(url){
            window.open(url, "_blank").focus();
        }
    }]);

}());
