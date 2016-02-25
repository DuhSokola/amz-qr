;(function () {
    'use strict';

    var deps = [
        'ui.router',
        'app.footer',
        'app.header',
        'app.imageArea',
        'app.languageSwitch',
        'app.contactForm',
        'app.landingPageForm',
        'app.leasingCalculatorForm',
        'app.modelList',
        'app.variantList'
    ];

    var app = angular.module('app.routes', deps);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/landingPage/vw/golf/golf_gti');

        $stateProvider
            .state('modelList', {
                url: '/modelList/:brand',
                views: {
                    '': {
                        templateUrl: 'app/sites/modelList.html'
                    },
                    'header@modelList': {
                        templateUrl: 'app/components/header/_header.html'
                    },
                    'modelList@modelList': {
                        templateUrl: 'app/components/modelList/_modelList.html'
                    },
                    'language@modelList': {
                        templateUrl: 'app/components/languageSwitch/_languageSwitch.html'
                    },
                    'footer@modelList': {
                        templateUrl: 'app/components/footer/_footer.html'
                    }
                }
            })
            .state('variantList', {
                url: '/variantList/:brand/:model/:modelVariant',
                views: {
                    '': {
                        templateUrl: 'app/sites/variantList.html'
                    },
                    'header@variantList': {
                        templateUrl: 'app/components/header/_header.html'
                    },
                    'variantList@variantList': {
                        templateUrl: 'app/components/variantList/_variantList.html'
                    },
                    'language@variantList': {
                        templateUrl: 'app/components/languageSwitch/_languageSwitch.html'
                    },
                    'footer@variantList': {
                        templateUrl: 'app/components/footer/_footer.html'
                    }
                }
            })
            .state('landingPage', {
                url: '/landingPage/:brand/:model/:modelVariant',
                views: {
                    '': {
                        templateUrl: 'app/sites/landingPage.html'
                    },
                    'header@landingPage': {
                        templateUrl: 'app/components/header/_header.html'
                    },
                    'imageArea@landingPage': {
                        templateUrl: 'app/components/imageArea/_imageArea.html'
                    },
                    'landingPageForm@landingPage': {
                        templateUrl: 'app/components/landingPageForm/_landingPageForm.html'
                    },
                    'language@landingPage': {
                        templateUrl: 'app/components/languageSwitch/_languageSwitch.html'
                    },
                    'footer@landingPage': {
                        templateUrl: 'app/components/footer/_footer.html'
                    }
                }
            })
            .state('leasingCalculator', {
                url: '/leasingCalculator/:brand/:model/:modelVariant',
                views: {
                    '': {
                        templateUrl: 'app/sites/leasingCalculator.html'
                    },
                    'header@leasingCalculator': {
                        templateUrl: 'app/components/header/_header.html'
                    },
                    'imageArea@leasingCalculator': {
                        templateUrl: 'app/components/imageArea/_imageArea.html'
                    },
                    'leasingCalculatorForm@leasingCalculator': {
                        templateUrl: 'app/components/leasingCalculator/_leasingCalculator.html'
                    },
                    'language@leasingCalculator': {
                        templateUrl: 'app/components/languageSwitch/_languageSwitch.html'
                    },
                    'footer@leasingCalculator': {
                        templateUrl: 'app/components/footer/_footer.html'
                    }
                }
            })
            .state('mainFormular', {
                url: '/mainFormular/:brand/:model/:modelVariant/:mode',
                views: {
                    '': {
                        templateUrl: 'app/sites/mainFormular.html'
                    },
                    'header@mainFormular': {
                        templateUrl: 'app/components/header/_header.html'
                    },
                    'language@mainFormular': {
                        templateUrl: 'app/components/languageSwitch/_languageSwitch.html'
                    },
                    'imageArea@mainFormular': {
                        templateUrl: 'app/components/imageArea/_imageArea.html'
                    },
                    'contactForm@mainFormular': {
                        templateUrl: 'app/components/contactForm/_contactForm.html'
                    },
                    'footer@mainFormular': {
                        templateUrl: 'app/components/footer/_footer.html'
                    }
                }
            })
            .state('error', {
                url: '/error',
                templateUrl: 'app/sites/error.html'
            })
            .state('impressum', {
                url: '/impressum',
                templateUrl: 'app/sites/impressum.html'
            })
            .state('terms', {
                url: '/terms',
                templateUrl: 'app/sites/terms.html'
            })
            .state('policy', {
                url: '/policy',
                templateUrl: 'app/sites/policy.html'
            })

    });

}());
