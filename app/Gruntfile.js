module.exports = function(grunt) {
    // Configuration

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                mangle: {
                    except: ['jQuery', 'Angular']
                }
            },
            my_target: {
                files: {
                    'build/output.min.js': ['bower_components/angular/angular.js'
                        ,'app.js'
                        ,'route.js'
                        ,'components/arcadegames/arcadegamesService.js'
                        ,'components/banner/bannerService.js'
                        ,'components/games/gamesService.js'
                        ,'components/livegames/livegamesService.js'
                        ,'components/logo/logoService.js'
                        ,'components/menu/menuService.js'
                        ,'components/scratchcard/scratchcardService.js'
                        ,'components/scratchgames/scratchgamesService.js'
                        ,'components/slotmachine/slotmachineService.js'
                        ,'components/tablecardgames/tablecardgamesService.js'
                        ,'components/tablegames/tablegamesService.js'
                        ,'components/videopoker/videopokerService.js'
                        ,'shared/directive/ticker/tickerService.js'
                        ,'components/footer/footerService.js'
                        ,'shared/directive/ticker/tickerDirective.js'
                        ,'shared/directive/featured/featuredDirective.js'
                        ,'shared/directive/login/loginDirective.js'
                        ,'components/arcadegames/arcadegamesController.js'
                        ,'components/banner/bannerController.js'
                        ,'components/games/gamesController.js'
                        ,'components/livegames/livegamesController.js'
                        ,'components/logo/logoController.js'
                        ,'components/menu/menuController.js'
                        ,'components/scratchcard/scratchcardController.js'
                        ,'components/scratchgames/scratchgamesController.js'
                        ,'components/slotmachine/slotmachineController.js'
                        ,'components/tablecardgames/tablecardgamesController.js'
                        ,'components/tablegames/tablegamesController.js'
                        ,'components/videopoker/videopokerController.js'
                        ,'components/footer/footerController.js'
                        ,'components/login/loginController.js'
                        ,'components/login/loginToggleController.js'
                        ,'bower_components/angular-ui-router/release/angular-ui-router.min.js'
                        ,'bower_components/angular-resource/angular-resource.js'
                        ,'bower_components/angular-animate/angular-animate.js'
                        ,'bower_components/jquery/dist/jquery.min.js'
                        ,'assets/js/bootstrap.min.js'
                        ,'bower_components/angular-touch/angular-touch.js'
                        ,'bower_components/angular-sanitize/angular-sanitize.js'
                        ,'bower_components/abdmob/x2js/xml2json.js'
                        ,'bower_components/ng-lodash/build/ng-lodash.js'
                        ,'bower_components/angular-count-to/build/angular-count-to.min.js'
                        ,'bower_components/angular-cookies/angular-cookies.js'
                        ,'bower_components/toastr/toastr.js'
                        ,'bower_components/angular-bindonce/bindonce.js'
                        ,'assets/js/styleDep.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};