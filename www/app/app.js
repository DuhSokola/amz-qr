;(function () {
    'use strict';

    var deps = [
        'app.routes',
        'app.carResource',
        'pascalprecht.translate',
        'ngMaterial',
        'ngProgress',
        'ngSanitize',
        'ngCookies'
    ];

    var app = angular.module('app', deps);

    app.config(function ($translateProvider) {

        $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

        $translateProvider.translations('DE', {
            "TITLE": "QR-Landingpage",
            "MODELLIST_SELECTMODEL": "Wählen Sie das gewünschte Model aus:",
            "VARIANTLIST_SELECTMODEL": "Wählen Sie die gewünschte Variante aus:",
            "IMAGEAREA_FROM": "Erhältlich ab",
            "IMAGEAREA_FRANCS": "CHF",

            "LEASINGCALC_PAYMENT": "Sonderzahlung:",
            "LEASINGCALC_DURATION": "Laufzeit:",
            "LEASINGCALC_MILAGE": "Jährliche Laufleistung:",
            "LEASINGCALC_PAYMENT_FRANCS": "CHF",
            "LEASINGCALC_DURATION_MONTH": "Monate",
            "LEASINGCALC_MILAGE_KILOMETER": "Km",
            "LEASINGCALC_OFFER": "Aktuelle Leasingangebote",
            "LEASINGCALC_OFFER_TEXT": "<b>Leasingaktion Generell {{discountRate}}%</b> <br /> Gültig bis: <b>{{validTo}}</b> <br />Laufzeit: <b>{{runningTimeFrom}} - {{runningTimeTo}} Monate</b> <br /> Jährliche Laufleistung: <b>bis {{kmPerYear}} km</b>",
            "LEASINGCALC_CALCULATE": "Berechnen",
            "LEASINGCALC_CONTACT": "Kontaktanfrage",
            "LEASINGCALC_BUTTON_BACK": "Zurück",
            "LEASINGCALC_MOTHLY_PAYMENT": "Monatliche Rate:",
            "LEASINGCALC_CHF": "CHF",
            "LEASINGCALC_INTERESTRATE": "Zinssatz:",
            "LEASINGCALC_INTERESTRATE_NOMINAL": "Nominal:",
            "LEASINGCALC_INTERESTRATE_EFFEKTIVE": "Effektiv:",

            "LANDINGPAGE_LEASING": "Leasing berechnen",
            "LANDINGPAGE_TESTDRIVE": "Probefahrt",
            "LANDINGPAGE_CATALOG": "Katalog",
            "LANDINGPAGE_BACK_TO_MODELLIST": "Zur Modelübersicht",

            "CONTACT_LEGEND_CUSTOMER_DATA": "Ihre Daten",
            "CONTACT_LEGEND_CATALOG": "Katalogversand",
            "CONTACT_LEGEND_TESTDRIVE": "Probefahrt",
            "CONTACT_LEGEND_LEASING": "Leasing",
            "CONTACT_LEGEND_NEWSLETTER": "Newsletter",
            "CONTACT_LEGEND_PRIVACY": "Datenschutzbestimmung",
            "CONTACT_MODELS": "Weitere Varianten",
            "CONTACT_SALUTATION_MR": "Herr",
            "CONTACT_SALUTATION_MRS": "Frau",
            "CONTACT_SALUTATION": "Anrede",
            "CONTACT_FIRSTNAME": "Vorname",
            "CONTACT_LASTNAME": "Name",
            "CONTACT_STREET": "Strasse",
            "CONTACT_STREET_NR": "Strassen Nr.",
            "CONTACT_ZIP": "PLZ",
            "CONTACT_CITY": "Ort",
            "CONTACT_TELEPHONE": "Telefon",
            "CONTACT_EMAIL": "Email",
            "CONTACT_CATALOG": "Katalog bestellen",
            "CONTACT_CATALOG_ELECTRONIC": "Elektronisch",
            "CONTACT_CATALOG_PRINTED": "Gedruckt",
            "CONTACT_TESTDRIVE": "Kontaktaufnahme für Probefahrt",
            "CONTACT_TESTDRIVE_EMAIL": "per Email",
            "CONTACT_TESTDRIVE_TELEFON": "per Telefon",
            "CONTACT_LEASING": "Kontaktaufnahme für Leasingsberatung",
            "CONTACT_LEASING_EMAIL": "per Email",
            "CONTACT_LEASING_TELEPHONE": "per Telefon",
            "CONTACT_NEWSLETTER": "Ich möchte Newsletter erhalten",
            "CONTACT_PRIVACY": "Ich bin mit den Datenschutzbestimmungen einverstanden",
            "CONTACT_BUTTON_SUBMIT": "Senden",
            "CONTACT_BUTTON_BACK": "Zurück",
            "CONTACT_ERROR_SALUTATION": "Anrede pflicht",
            "CONTACT_ERROR_FIRSTNAME": "Vorname pflicht",
            "CONTACT_ERROR_LASTNAME": "Name pflicht",
            "CONTACT_ERROR_STREET": "Strasse pflicht",
            "CONTACT_ERROR_STREET_NR": "Strassen Nummer pflicht",
            "CONTACT_ERROR_ZIP": "PLZ pflicht",
            "CONTACT_ERROR_CITY": "Ort pflicht",
            "CONTACT_ERROR_TELEPHONE": "Telefon pflicht",
            "CONTACT_ERROR_EMAIL": "Geben Sie valide Email ein",
            "CONTACT_ERROR_CATALOG": "Katalog pflicht",
            "CONTACT_ERROR_TESTDRIVE": "Probefahrt pflicht",
            "CONTACT_ERROR_LEASING": "Leasing pflicht",
            "CONTACT_ERROR_NEWSLETTER": "Newsletter pflicht",
            "CONTACT_ERROR_PRIVACY": "Datenschutzbestimmung pflicht"
        });

        $translateProvider.translations('FR', {
            "TITLE": "QR-Landingpage",
            "MODELLIST_SELECTMODEL": "Sélectionnez le modèle souhaité:",
            "VARIANTLIST_SELECTMODEL": "Sélectionnez la variante souhaitée::",
            "IMAGEAREA_FROM": "Disponible à partir de",
            "IMAGEAREA_FRANCS": "CHF",

            "LEASINGCALC_PAYMENT": "Acompte spécial:",
            "LEASINGCALC_DURATION": "Durée contractuelle:",
            "LEASINGCALC_MILAGE": "Kilométrage annuel:",
            "LEASINGCALC_PAYMENT_FRANCS": "CHF",
            "LEASINGCALC_DURATION_MONTH": "Mois",
            "LEASINGCALC_MILAGE_KILOMETER": "Km",
            "LEASINGCALC_OFFER": "Offres de leasing",
            "LEASINGCALC_OFFER_TEXT": "<b>Action de leasing générale {{discountRate}}%</b> <br /> Valable jusqu'au: <b>{{validTo}}</b> <br />Durée contractuelle: <b>{{runningTimeFrom}} - {{runningTimeTo}} mois</b> <br /> Kilométrage annuel: <b>jusqu'à {{kmPerYear}} km</b>",
            "LEASINGCALC_CALCULATE": "Calculer",
            "LEASINGCALC_CONTACT": "Demande de prise de contact",
            "LEASINGCALC_BUTTON_BACK": "Retourner",
            "LEASINGCALC_MOTHLY_PAYMENT": "Mensualité:",
            "LEASINGCALC_CHF": "CHF",
            "LEASINGCALC_INTERESTRATE": "Taux d'intérêt:",
            "LEASINGCALC_INTERESTRATE_NOMINAL": "Nominal:",
            "LEASINGCALC_INTERESTRATE_EFFEKTIVE": "Réel:",

            "LANDINGPAGE_LEASING": "Calculer le leasing",
            "LANDINGPAGE_TESTDRIVE": "Essai routier",
            "LANDINGPAGE_CATALOG": "Catalogue",
            "LANDINGPAGE_BACK_TO_MODELLIST": "Aller à l'aperçu des modèles",

            "CONTACT_LEGEND_CUSTOMER_DATA": "Vos données",
            "CONTACT_LEGEND_CATALOG": "Envoi du catalogue",
            "CONTACT_LEGEND_TESTDRIVE": "Essai routier",
            "CONTACT_LEGEND_LEASING": "Leasing",
            "CONTACT_LEGEND_NEWSLETTER": "Newsletter",
            "CONTACT_LEGEND_PRIVACY": "Dispositions sur la protection des données",
            "CONTACT_MODELS": "Autres variantes",
            "CONTACT_SALUTATION_MR": "Monsieur",
            "CONTACT_SALUTATION_MRS": "Madame",
            "CONTACT_SALUTATION": "Civilité",
            "CONTACT_FIRSTNAME": "Prénom",
            "CONTACT_LASTNAME": "Nom",
            "CONTACT_STREET": "Rue",
            "CONTACT_STREET_NR": "Numéro",
            "CONTACT_ZIP": "NPA",
            "CONTACT_CITY": "Lieu",
            "CONTACT_TELEPHONE": "Téléphone",
            "CONTACT_EMAIL": "E-mail",
            "CONTACT_CATALOG": "Commande de catalogue",
            "CONTACT_CATALOG_ELECTRONIC": "Version numérique",
            "CONTACT_CATALOG_PRINTED": "Version imprimée",
            "CONTACT_TESTDRIVE": "Prise de contact pour l'essai routier",
            "CONTACT_TESTDRIVE_EMAIL": "par e-mail",
            "CONTACT_TESTDRIVE_TELEFON": "par téléphone",
            "CONTACT_LEASING": "Prise de contact pour un conseil de leasing",
            "CONTACT_LEASING_EMAIL": "par e-mail",
            "CONTACT_LEASING_TELEPHONE": "par téléphone",
            "CONTACT_NEWSLETTER": "Je souhaite recevoir la newsletter",
            "CONTACT_PRIVACY": "J'accepte les dispositions de protection des données",
            "CONTACT_BUTTON_SUBMIT": "Envoyer",
            "CONTACT_BUTTON_BACK": "Retour",
            "CONTACT_ERROR_SALUTATION": "Civilité / obligatoire",
            "CONTACT_ERROR_FIRSTNAME": "Prénom obligatoire",
            "CONTACT_ERROR_LASTNAME": "Nom obligatoire",
            "CONTACT_ERROR_STREET": "Rue obligatoire",
            "CONTACT_ERROR_STREET_NR": "Numéro obligatoire",
            "CONTACT_ERROR_ZIP": "NPA obligatoire",
            "CONTACT_ERROR_CITY": "Lieu obligatoire",
            "CONTACT_ERROR_TELEPHONE": "Téléphone obligatoire",
            "CONTACT_ERROR_EMAIL": "Tapez une adresse e-mail valide",
            "CONTACT_ERROR_CATALOG": "Catalogue obligatoire",
            "CONTACT_ERROR_TESTDRIVE": "Essai routier obligatoire",
            "CONTACT_ERROR_LEASING": "Leasing obligatoire",
            "CONTACT_ERROR_NEWSLETTER": "Newsletter obligatoire",
            "CONTACT_ERROR_PRIVACY": "Dispositions sur la protection des données obligatoires"
        });

        $translateProvider.translations('IT', {
            "TITLE": "QR-Landingpage",
            "MODELLIST_SELECTMODEL": "Selezioni il modello desiderato:",
            "VARIANTLIST_SELECTMODEL": "Selezioni la variante desiderata:",
            "IMAGEAREA_FROM": "Disponibile da",
            "IMAGEAREA_FRANCS": "CHF",

            "LEASINGCALC_PAYMENT": "Anticipo:",
            "LEASINGCALC_DURATION": "Durata:",
            "LEASINGCALC_MILAGE": "Chilometraggio annuale:",
            "LEASINGCALC_PAYMENT_FRANCS": "CHF",
            "LEASINGCALC_DURATION_MONTH": "Mesi",
            "LEASINGCALC_MILAGE_KILOMETER": "Km",
            "LEASINGCALC_OFFER": "Offerte leasing",
            "LEASINGCALC_OFFER_TEXT": "<b>Promozione leasing generale: {{discountRate}}%</b> <br /> Validità fino al: <b>{{validTo}}</b> <br />Durata: <b>{{runningTimeFrom}} - {{runningTimeTo}} mesi</b> <br /> Chilometraggio annuale: <b>fino a {{kmPerYear}} km</b>",
            "LEASINGCALC_CALCULATE": "Calcola",
            "LEASINGCALC_CONTACT": "Richiesta di contatto",
            "LEASINGCALC_BUTTON_BACK": "Indietro",
            "LEASINGCALC_MOTHLY_PAYMENT": "Rata mensile:",
            "LEASINGCALC_CHF": "CHF",
            "LEASINGCALC_INTERESTRATE": "Tasso d'interesse:",
            "LEASINGCALC_INTERESTRATE_NOMINAL": "Nominale:",
            "LEASINGCALC_INTERESTRATE_EFFEKTIVE": "Effettivo:",

            "LANDINGPAGE_LEASING": "Calcola leasing",
            "LANDINGPAGE_TESTDRIVE": "Giro di prova",
            "LANDINGPAGE_CATALOG": "Catalogo",
            "LANDINGPAGE_BACK_TO_MODELLIST": "Vai alla panoramica dei modelli",

            "CONTACT_LEGEND_CUSTOMER_DATA": "I suoi dati",
            "CONTACT_LEGEND_CATALOG": "Spedizione catalogo",
            "CONTACT_LEGEND_TESTDRIVE": "Giro di prova",
            "CONTACT_LEGEND_LEASING": "Leasing",
            "CONTACT_LEGEND_NEWSLETTER": "Newsletter",
            "CONTACT_LEGEND_PRIVACY": "Disposizione sulla protezione dei dati ",
            "CONTACT_MODELS": "Altre varianti",
            "CONTACT_SALUTATION_MR": "Signor",
            "CONTACT_SALUTATION_MRS": "Signora",
            "CONTACT_SALUTATION": "Appellativo",
            "CONTACT_FIRSTNAME": "Nome",
            "CONTACT_LASTNAME": "Cognome",
            "CONTACT_STREET": "Via",
            "CONTACT_STREET_NR": "Via numero",
            "CONTACT_ZIP": "NPA",
            "CONTACT_CITY": "Località ",
            "CONTACT_TELEPHONE": "Telefono",
            "CONTACT_EMAIL": "E-mail",
            "CONTACT_CATALOG": "Ordina catalogo",
            "CONTACT_CATALOG_ELECTRONIC": "Versione elettronica",
            "CONTACT_CATALOG_PRINTED": "Versione stampata",
            "CONTACT_TESTDRIVE": "Contatto per giro di prova",
            "CONTACT_TESTDRIVE_EMAIL": "per e-mail",
            "CONTACT_TESTDRIVE_TELEFON": "per telefono",
            "CONTACT_LEASING": "Contatto per consulenza leasing",
            "CONTACT_LEASING_EMAIL": "per e-mail",
            "CONTACT_LEASING_TELEPHONE": "per telefono",
            "CONTACT_NEWSLETTER": "Desidero ricevere la newsletter",
            "CONTACT_PRIVACY": "Concordo con le disposizioni sulla protezione dei dati",
            "CONTACT_BUTTON_SUBMIT": "Inviare",
            "CONTACT_BUTTON_BACK": "Indietro",
            "CONTACT_ERROR_SALUTATION": "Appellativo obbligatorio ",
            "CONTACT_ERROR_FIRSTNAME": "Nome obbligatorio",
            "CONTACT_ERROR_LASTNAME": "Cognome obbligatorio",
            "CONTACT_ERROR_STREET": "Via obbligatorio",
            "CONTACT_ERROR_STREET_NR": "Numero obbligatorio",
            "CONTACT_ERROR_ZIP": "NPA obbligatorio",
            "CONTACT_ERROR_CITY": "Località obbligatorio",
            "CONTACT_ERROR_TELEPHONE": "Telefono obbligatorio",
            "CONTACT_ERROR_EMAIL": "Inserire un'e-mail valida",
            "CONTACT_ERROR_CATALOG": "Catalogo obbligatorio",
            "CONTACT_ERROR_TESTDRIVE": "Giro di prova obbligatorio",
            "CONTACT_ERROR_LEASING": "Leasing obbligatorio",
            "CONTACT_ERROR_NEWSLETTER": "Newsletter obbligatorio",
            "CONTACT_ERROR_PRIVACY": "Disposizione sulla protezione dei dati obbligatorio"
        });

        $translateProvider.translations('EN', {
            "TITLE": "QR-Landingpage",
            "MODELLIST_SELECTMODEL": "Select your required model:",
            "VARIANTLIST_SELECTMODEL": "Select your required variant:",
            "IMAGEAREA_FROM": "Available from",
            "IMAGEAREA_FRANCS": "CHF",

            "LEASINGCALC_PAYMENT": "Special bonus:",
            "LEASINGCALC_DURATION": "Term:",
            "LEASINGCALC_MILAGE": "Annual mileage:",
            "LEASINGCALC_PAYMENT_FRANCS": "CHF",
            "LEASINGCALC_DURATION_MONTH": "Months",
            "LEASINGCALC_MILAGE_KILOMETER": "Km",
            "LEASINGCALC_OFFER": "Leasing offering",
            "LEASINGCALC_OFFER_TEXT": "<b>Leasing offer, general:  {{discountRate}}%</b> <br /> Valid until: <b>{{validTo}}</b> <br />Term: <b>{{runningTimeFrom}} - {{runningTimeTo}} months</b> <br /> Annual mileage: <b> up to {{kmPerYear}} km</b>",
            "LEASINGCALC_CALCULATE": "Calculate",
            "LEASINGCALC_CONTACT": "Contact request",
            "LEASINGCALC_BUTTON_BACK": "Back",
            "LEASINGCALC_MOTHLY_PAYMENT": "Monthly installment:",
            "LEASINGCALC_CHF": "CHF",
            "LEASINGCALC_INTERESTRATE": "Interest rate:",
            "LEASINGCALC_INTERESTRATE_NOMINAL": "Nominal rate:",
            "LEASINGCALC_INTERESTRATE_EFFEKTIVE": "Effective rate:",

            "LANDINGPAGE_LEASING": "Calculate leasing",
            "LANDINGPAGE_TESTDRIVE": "Test drive",
            "LANDINGPAGE_CATALOG": "Catalogue",
            "LANDINGPAGE_BACK_TO_MODELLIST": "To overview of models",

            "CONTACT_LEGEND_CUSTOMER_DATA": "Your data",
            "CONTACT_LEGEND_CATALOG": "Dispatch catalogue",
            "CONTACT_LEGEND_TESTDRIVE": "Test drive",
            "CONTACT_LEGEND_LEASING": "Leasing",
            "CONTACT_LEGEND_NEWSLETTER": "Newsletter",
            "CONTACT_LEGEND_PRIVACY": "Data protection provisions",
            "CONTACT_MODELS": "Other variants",
            "CONTACT_SALUTATION_MR": "Mr",
            "CONTACT_SALUTATION_MRS": "Ms",
            "CONTACT_SALUTATION": "Title",
            "CONTACT_FIRSTNAME": "First name",
            "CONTACT_LASTNAME": "Last name",
            "CONTACT_STREET": "Street",
            "CONTACT_STREET_NR": "Street no.",
            "CONTACT_ZIP": "Postcode",
            "CONTACT_CITY": "Town/City",
            "CONTACT_TELEPHONE": "Telephone",
            "CONTACT_EMAIL": "E-mail",
            "CONTACT_CATALOG": "Order catalogue",
            "CONTACT_CATALOG_ELECTRONIC": "Electronic",
            "CONTACT_CATALOG_PRINTED": "Printed",
            "CONTACT_TESTDRIVE": "Contact for test drive",
            "CONTACT_TESTDRIVE_EMAIL": "by e-mail",
            "CONTACT_TESTDRIVE_TELEFON": "by telephone",
            "CONTACT_LEASING": "Contact for leasing consultation",
            "CONTACT_LEASING_EMAIL": "by e-mail",
            "CONTACT_LEASING_TELEPHONE": "by telephone",
            "CONTACT_NEWSLETTER": "I would like to receive the newsletter",
            "CONTACT_PRIVACY": "I agree to the data protection provisions",
            "CONTACT_BUTTON_SUBMIT": "Send",
            "CONTACT_BUTTON_BACK": "Back",
            "CONTACT_ERROR_SALUTATION": "Title (mandatory) ",
            "CONTACT_ERROR_FIRSTNAME": "First name (mandatory)",
            "CONTACT_ERROR_LASTNAME": "Last name (mandatory)",
            "CONTACT_ERROR_STREET": "Street (mandatory)",
            "CONTACT_ERROR_STREET_NR": "Street number (mandatory)",
            "CONTACT_ERROR_ZIP": "Postcode (mandatory)",
            "CONTACT_ERROR_CITY": "Town/City (mandatory)",
            "CONTACT_ERROR_TELEPHONE": "Telephone (mandatory)",
            "CONTACT_ERROR_EMAIL": "Enter a valid e-mail address",
            "CONTACT_ERROR_CATALOG": "Catalogue (mandatory)",
            "CONTACT_ERROR_TESTDRIVE": "Test drive (mandatory)",
            "CONTACT_ERROR_LEASING": "Leasing (mandatory)",
            "CONTACT_ERROR_NEWSLETTER": "Newsletter (mandatory)",
            "CONTACT_ERROR_PRIVACY": "Data protection provisions (mandatory)"
        });
        $translateProvider.preferredLanguage('EN');
    });

    app.run(function ($rootScope) {
        $rootScope.cssFileName = 'main';

        $rootScope.carsApi = 'https://www.leadcollector.amag.ch/readAllModelVariants';

        $rootScope.leasingApi = 'https://www.leadcollector.amag.ch/leasingCalcStatisticModule/leasingCalcWithStatistic';
        $rootScope.leasingPromotionApi = 'https://www.leadcollector.amag.ch/leasingCalcStatisticModule/leasingPromotions';

        $rootScope.global = {};
        $rootScope.global.languages = ['EN', 'DE', 'FR', 'IT'];
        $rootScope.global.campaign = 'autosalon_genf_2016_qr';
        $rootScope.global.data = {};
        $rootScope.global.params = {};
    });


    app.controller('mainCtrl', ['$scope', '$rootScope', 'CarResource', 'ngProgressFactory', 'blockUI', 'CarDataReader', 'LeasingPromotionDataResource', function ($scope, $rootScope, CarResource, ngProgressFactory, blockUI, CarDataReader, LeasingPromotionDataResource) {
        $rootScope.$watch('global.params.selectedBrand', function (newVal, oldVal) {
            if (newVal !== oldVal) {
                $scope.progressbar = ngProgressFactory.createInstance();
                $scope.progressbar.start();
                blockUI.start();
                CarResource.getByBrand($rootScope.global.params.selectedBrand, function (response) {
                        $rootScope.global.params.allModels = response.models;
                        CarDataReader.loadCarDataByModel($rootScope.global.params.allModels, $rootScope.global.params.selectedModel, $rootScope.global.params.selectedModelVariant);
                        console.log($rootScope.global.params);
                        LeasingPromotionDataResource.getLeasingPromotions($rootScope.global.params.selectedModelVariantObj, function (res) {
                            for (var i = 0; i < res.data.length; i++) {
                                if (res.data[i].id.substring(0, 5) == '0001_') {
                                    res.data.splice(i, 1);
                                    i--;
                                }
                            }
                            $rootScope.global.params.leasingPromotions = res.data;
                            //console.log($rootScope.global.params.leasingPromotions);
                            $scope.progressbar.complete();
                            blockUI.stop();
                        }, function (data) {
                            console.log('ERROR');
                            $scope.progressbar.complete();
                            blockUI.stop();
                        });
                        $scope.progressbar.complete();
                        blockUI.stop();
                    },
                    function (error) {
                        console.log('ERROR');
                        $scope.progressbar.complete();
                        blockUI.stop();
                    });
            }
        }, true);

        $rootScope.$watch('global.params.selectedModel', function () {
            if ($rootScope.global.params.allModels) {
                CarDataReader.loadCarDataByModel($rootScope.global.params.allModels, $rootScope.global.params.selectedModel, $rootScope.global.params.selectedModelVariant);
                LeasingPromotionDataResource.getLeasingPromotions($rootScope.global.params.selectedModelVariantObj, function (res) {
                    for (var i = 0; i < res.data.length; i++) {
                        if (res.data[i].id.substring(0, 5) == '0001_') {
                            res.data.splice(i, 1);
                            i--;
                        }
                    }
                    $rootScope.global.params.leasingPromotions = res.data;
                }, function (data) {
                    console.log('ERROR LEASING PROMOTIONS');
                });
            }
        });

        $rootScope.$watch('global.params.selectedModelVariant', function () {
            if ($rootScope.global.params.allModels && $rootScope.global.params.selectedModel && $rootScope.global.params.selectedModelVariant) {
                CarDataReader.loadCarDataByModel($rootScope.global.params.allModels, $rootScope.global.params.selectedModel, $rootScope.global.params.selectedModelVariant);
                LeasingPromotionDataResource.getLeasingPromotions($rootScope.global.params.selectedModelVariantObj, function (res) {
                    for (var i = 0; i < res.data.length; i++) {
                        if (res.data[i].id.substring(0, 5) == '0001_') {
                            res.data.splice(i, 1);
                            i--;
                        }
                    }
                    $rootScope.global.params.leasingPromotions = res.data;
                }, function (data) {
                    console.log('ERROR LEASING PROMOTIONS');
                });
            }
        });

        $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
            $rootScope.previousState = from.name;
            $rootScope.currentState = to.name;
        });

    }]);

}());
