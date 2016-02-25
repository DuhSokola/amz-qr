;(function () {
    'use strict';

    var deps = [
        'ngResource'
    ];

    var app = angular.module('app.leadResource', deps);


    app.factory('LeadResource', ['$rootScope','$translate',function ($rootScope,$translate) {

        var persist = function (data, success, error) {

            // OPTION_219!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

            var dataStuff =
                'salutation='+(data.salutation==='Mr'?'m':'f')+
                '&lang='+$translate.use().toLowerCase()+
                '&name='+data.firstName+
                '&surname='+data.lastName+
                '&street='+data.street+
                '&houseNumber='+data.streetNr+
                '&zip='+data.zip+
                '&city='+data.city+
                '&phone='+data.telephone+
                '&mail='+data.email+
                '&orderbrochureselectro='+(data.catalogTyp === 'electronic')+
                '&conditionsAccepted='+data.privacyAccepted+
                '&brand='+data.brand+
                '&campaigncode='+$rootScope.global.campaign+
                '&testdrive='+data.testdrive +
                '&orderbrochures='+data.catalog +
                '&vlcoptions='+'option_219'+
                '&company='+
                '&country='+
                '&dealer='+
                '&reachability='+
                '&remarks='+
                '&salesperson='+
                '&dynamicSearchResult=false'+
                '&collector=QRLandingpage'+
                '&versionNumber=0.0.1'+
                '&contact=false'+
                '&leadactiontyp='+
                '&age='+
                '&currentBrand='+
                '&currentModel=';

            console.log(dataStuff);

            /*$.ajax({
                type: 'POST',
                async: false,
                data: dataStuff,
                timeout: 3000,
                url: 'https://www.leadcollector.amag.ch/exhibitionapp/backend/leadsubmission',
                success: success,
                error: error
            });*/

            /*$.ajax({
                type: 'POST',
                async: false,
                data: dataStuff,
                timeout: 3000,
                url: 'http://localhost:8080/leadsubmission',
                success: success,
                error: error
            });*/
        };

        return {
            persist: persist
        };
    }]);

}());