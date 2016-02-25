;(function () {
    'use strict';

    var dependencies = [];

    var app = angular.module('app.carDataReader', dependencies);

    app.factory('CarDataReader', ['$rootScope', function ($rootScope) {
        var loadCarDataByModel = function (brandModels, model, modelVariant) {
            for (var i = 0; i < brandModels.length; i++) {
                if (brandModels[i].id == model.toLowerCase()) {
                    if (modelVariant) {
                        for (var j = 0; j < brandModels[i].variantList.length; j++) {

                            var versionList = brandModels[i].variantList[j].versionList;

                            for (var k = 0; k < versionList.length; k++) {
                                var compareIndex = k + 1;
                                if (compareIndex < versionList.length) {
                                    if (versionList[k].price < versionList[compareIndex].price) {
                                        versionList.splice(compareIndex,1);
                                        k--;
                                    } else {
                                        versionList.splice(k,1);
                                        k--;
                                    }
                                }
                            }

                            if (brandModels[i].variantList[j].id == modelVariant.toLowerCase()) {
                                $rootScope.global.params.selectedModelVariantObj = brandModels[i].variantList[j];
                                break;
                            }
                        }
                    }
                    else {
                        console.log('modelVariant not found, took first from variantList');
                        $rootScope.global.params.selectedModelVariant = brandModels[i].variantList[0].id;
                        console.log(brandModels[i].variantList[0]);
                        $rootScope.global.params.selectedModelVariantObj = brandModels[i].variantList[0];
                    }
                    $rootScope.global.params.variantList = brandModels[i].variantList;
                    //console.log(brandModels[i].variantList);
                    return true;
                }
            }
            console.log('model not found');
            return false;
        };

        return {
            loadCarDataByModel: loadCarDataByModel
        }
    }]);

}());