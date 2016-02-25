;(function () {
    'use strict';

    var deps = [];

    var app = angular.module('app.languageSwitch.ctrl', deps);

    app.controller('LanguageSwitchCtrl', ['$scope', '$rootScope','$translate','$cookies', function ($scope, $rootScope,$translate,$cookies) {
        $scope.languages = $rootScope.global.languages;
        if($cookies.get('language') && $cookies.get('language') != ''){
            $scope.selectedLanguage = $cookies.get('language');
            $translate.use($scope.selectedLanguage);
        }else{
            $cookies.put('language',$scope.languages[0]);
            var langExists = false;
            for(var item in $rootScope.global.languages){
                if(navigator.language.toUpperCase() == $rootScope.global.languages[item]){
                    langExists = true;
                    break;
                }
            }
            $scope.selectedLanguage = langExists ? navigator.language.toUpperCase() : $scope.languages[0];
            $translate.use($scope.selectedLanguage);
        }

        $scope.$watch('selectedLanguage',function(newValue, oldValue){
            if(newValue !== oldValue){
                $cookies.put('language',newValue);
                $translate.use(newValue);
            }
        });
    }]);

}());