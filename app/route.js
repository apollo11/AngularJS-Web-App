/**
 * Created by apollo on 10/01/2016.
 */
'use strict';

app.config(['$stateProvider'
    , '$urlRouterProvider'
    , '$locationProvider'
    , '$resourceProvider'
    , function ($stateProvider
        , $urlRouterProvider
        , $locationProvider
        , $resourceProvider
    ) {

        //use the HTML5 History API
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');

        // Don't strip trailing slashes from calculated URLs
        $resourceProvider.defaults.stripTrailingSlashes = false;

        //For unmatched url, redirect to /state1
        $urlRouterProvider.otherwise('/');
        $stateProvider
        //Set up the navigation
            .state('root', {
                abstract: true,
                views: {
                    'banner': {
                        templateUrl: 'components/banner/bannerView.html',
                        controller: 'BannerController'
                    },
                    'menu': {
                        controller: 'MenuController',
                        templateUrl: 'components/menu/menuView.html'
                    },
                    'login': {
                        templateUrl: 'components/login/loginView.html'
                    },
                    'logo': {
                        templateUrl: 'components/logo/logoView.html',
                        controller: 'LogoController'
                    },
                    'footer': {
                        templateUrl: 'components/footer/footerView.html',
                        controller: 'FooterController'
                    }

                }
            })

            .state('games', {
                url: '/allgames',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: 'components/games/gamesView.html',
                        controller: 'GamesController'
                    }
                }
            })

            .state('arcade', {
                url: '/',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: 'components/arcadegames/arcadegamesView.html',
                        controller: 'ArcadeController'
                    }
                }
            })

            .state('scratchcard', {
                url: '/scratchcard',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: 'components/scratchcard/scratchcardView.html',
                        controller: 'ScratchCardController'
                    }
                }
            })
            .state('scratchgames', {
                url: '/scratchgames',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: 'components/scratchgames/scratchgamesView.html',
                        controller: 'ScratchGamesController'
                    }
                }
            })

            .state('slotmachine', {
                url: '/slotmachine',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: 'components/slotmachine/slotmachineView.html',
                        controller: 'SlotMachineController'
                    }
                }
            })

            .state('tablecard', {
                url: '/tablecard',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: 'components/tablecardgames/tablecardgamesView.html',
                        controller: 'TableCardController'
                    }
                }
            })

            .state('table', {
                url: '/table',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: 'components/tablegames/tablegamesView.html',
                        controller: 'TableGamesController'
                    }
                }
            })

            .state('videopoker', {
                url: '/videopoker',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: 'components/videopoker/videopokerView.html',
                        controller: 'VideoPokerController'
                    }
                }
            })

            .state('live', {
                url: '/live',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: 'components/livegames/livegamesView.html',
                        controller: 'LiveController'
                    }
                }
            })

            .state('cs', {
                url: '/cs',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: 'components/footer/csView.html',
                        controller: 'FooterController'
                    }
                }
            })

            .state('recommend', {
                url: '/rec',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: 'components/footer/recommendView.html',
                        controller: 'FooterController'
                    }
                }
            })

            .state('partners', {
                url: '/partners',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: 'components/footer/partnersView.html',
                        controller: 'FooterController'
                    }
                }
            })

            .state('terms', {
                url: '/terms',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: 'components/footer/termsView.html',
                        controller: 'FooterController'
                    }
                }
            })

            .state('contact', {
                url: '/contact',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: 'components/footer/contactView.html',
                        controller: 'FooterController'
                    }
                }
            })

            .state('faq', {
                url: '/faq',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: 'components/footer/faqView.html',
                        controller: 'FooterController'
                    }
                }
            })

            .state('about', {
                url: '/about',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: 'components/footer/aboutView.html',
                        controller: 'FooterController'
                    }
                }
            })

    }]);
