/**
 * Created by apollo on 10/01/2016.
 */
'use strict';

app.config(['$stateProvider'
     ,'$urlRouterProvider'
     ,'$locationProvider'
     ,'$resourceProvider'
     , function ($stateProvider
        , $urlRouterProvider
        , $locationProvider
        , $resourceProvider) {

    //use the HTML5 History API
    $locationProvider.html5Mode(true);

    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;

   //For unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/allgames');
    $stateProvider
   //Set up the navigation
    .state('root', {
        abstract: true,
        views:{
                'banner':{
                    templateUrl: '/components/banner/bannerView.html',
                    controller: 'BannerController'
                },

                'menu':{
                    controller: 'MenuController',
                    templateUrl:'/components/menu/menuView.html'
                },
                'logo':{
                    templateUrl:'/components/logo/logoView.html',
                    controller: 'LogoController'
                }
            }
    })

    .state('games', {
        url: '/allgames',
        parent: 'root',
        views:{
            '@': {
                templateUrl: '/components/games/gamesView.html',
                controller: 'GamesController'
            }
        }
    })

    .state('arcadegames', {
      url:'/arcade',
      parent:'root',
      views:{
          '@': {
              templateUrl: '/components/arcadegames/arcadegamesView.html',
              controller: 'ArcadeController'
          }
      }
    })

    .state('scratchcard', {
        url:'/scratchcard',
        parent:'root',
        views:{
            '@': {
                templateUrl: '/components/scratchcard/scratchcardView.html',
                controller: 'ScratchCardController'
            }
        }
    })

    .state('scratchgames', {
        url:'/scratchgames',
        parent:'root',
        views:{
            '@': {
                templateUrl: '/components/scratchgames/scratchgamesView.html',
                controller: 'ScratchGamesController'
            }
        }
    })

    .state('slotmachine', {
        url:'/slotmachine',
        parent:'root',
        views:{
            '@': {
                templateUrl: '/components/slotmachine/slotmachineView.html',
                controller: 'SlotMachineController'
            }
        }
    })
        .state('tablecard', {
            url:'/tablecard',
            parent:'root',
            views:{
                '@': {
                    templateUrl: '/components/tablecardgames/tablecardgamesView.html',
                    controller: 'TableCardController'
                }
            }
    })

    }]);
