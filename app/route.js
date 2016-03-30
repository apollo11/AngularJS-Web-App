/**
 * Created by apollo on 10/01/2016.
 */
'use strict';

app.config(['$stateProvider'
    , '$urlRouterProvider'
    , '$locationProvider'
    , '$resourceProvider'
    , 'usSpinnerConfigProvider'
    , function ($stateProvider
        , $urlRouterProvider
        , $locationProvider
        , $resourceProvider
        , usSpinnerConfigProvider
    ) {
        //Spinner
        var opts = {
            lines: 13 // The number of lines to draw
            , length: 12 // The length of each line
            , width: 19 // The line thickness
            , radius: 40 // The radius of the inner circle
            , scale: 1.5 // Scales overall size of the spinner
            , corners: 0.8 // Corner roundness (0..1)
            , color: '#fff' // #rgb or #rrggbb or array of colors
            , opacity: 0.4 // Opacity of the lines
            , rotate: 0 // The rotation offset
            , direction: 1 // 1: clockwise, -1: counterclockwise
            , speed: 1.2 // Rounds per second
            , trail: 58 // Afterglow percentage
            , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
            , zIndex: 2e9 // The z-index (defaults to 2000000000)
            , className: 'spinner' // The CSS class to assign to the spinner
            , top: '51%' // Top position relative to parent
            , left: '51%' // Left position relative to parent
            , shadow: false // Whether to render a shadow
            , hwaccel: true // Whether to use hardware acceleration
            , position: 'absolute' // Element positioning
        };
        usSpinnerConfigProvider.setTheme('bigBlue', opts);


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
            });

    }]);
