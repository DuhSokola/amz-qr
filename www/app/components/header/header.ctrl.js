;(function () {
    'use strict';

    var dependencies = [];

    var app = angular.module('app.header.ctrl', dependencies);

    app.controller('HeaderCtrl', ['$rootScope', '$scope', '$state', '$stateParams']);

}());
