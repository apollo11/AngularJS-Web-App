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
        , $resourceProvider) {

        //use the HTML5 History API
        $locationProvider.html5Mode(true);

        // Don't strip trailing slashes from calculated URLs
        $resourceProvider.defaults.stripTrailingSlashes = false;

        //For unmatched url, redirect to /state1
        $urlRouterProvider.otherwise('app/games');
        $stateProvider
        //Set up the navigation
            .state('root', {
                abstract: true,
                views: {
                    'banner': {
                        templateUrl: 'banner/bannerView.html',
                        controller: 'BannerController'
                    },

                    'menu': {
                        controller: 'MenuController',
                        templateUrl: 'app/components/menu/menuView.html'
                    },
                    'logo': {
                        templateUrl: 'app/components/logo/logoView.html',
                        controller: 'LogoController'
                    }
                }
            })

            .state('games', {
                url: 'app/games',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: 'app/components/games/gamesView.html',
                        controller: 'GamesController'
                    }
                }
            })

            .state('arcade', {
                url: 'app/arcade',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: 'app/components/arcadegames/arcadegamesView.html',
                        controller: 'ArcadeController'
                    }
                }
            })

            .state('scratchcard', {
                url: 'app/scratchcard',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: 'app/components/scratchcard/scratchcardView.html',
                        controller: 'ScratchCardController'
                    }
                }
            })

            .state('scratchgames', {
                url: 'app/scratch',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: 'app/components/scratchgames/scratchgamesView.html',
                        controller: 'ScratchGamesController'
                    }
                }
            })

            .state('slotmachine', {
                url: 'app/slotmachine',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: 'app/components/slotmachine/slotmachineView.html',
                        controller: 'SlotMachineController'
                    }
                }
            })

            .state('tablecard', {
                url: 'app/tablecard',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: 'app/components/tablecardgames/tablecardgamesView.html',
                        controller: 'TableCardController'
                    }
                }
            })

            .state('table', {
                url: 'app/table',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: 'app/components/tablegames/tablegamesView.html',
                        controller: 'TableGamesController'
                    }
                }
            })

            .state('videopoker', {
                url: 'app/videopoker',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: 'app/components/videopoker/videopokerView.html',
                        controller: 'VideoPokerController'
                    }
                }
            })

            .state('live', {
                url: 'app/live',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: 'app/components/livegames/livegamesView.html',
                        controller: 'LiveController'
                    }
                }
            })


    }]);
