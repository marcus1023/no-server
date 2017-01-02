angular.module('resources',  ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('replit',{
            url:'/replit',
            templateUrl: "../templates/replit-tmpl.html"
        })
        .state('learn',{
            url:'/learn',
            templateUrl: "../templates/learn-tmpl.html"
        })
        .state('wThreeSchool',{
            url:'/wThreeSchool',
            templateUrl: "../templates/w3-schools.html"
        })
        .state('wireframe',{
            url:'/wireframe',
            templateUrl: "../templates/wireframe-tmpl.html"
        })
        .state('develop',{
            url:'/develop',
            templateUrl: "../templates/develop-tmpl.html"
        })
        .state('pluralsite',{
            url:'/pluralsite',
            templateUrl: "../templates/pluralsite-tmpl.html"
        })
        .state('webplatform',{
            url:'/webplatform',
            templateUrl: "../templates/webplatform-tmpl.html"
        })
        .state('cssbutton',{
            url:'/cssbutton',
            templateUrl: "../templates/css-button-tmpl.html"
        })
        .state('cssanimate',{
            url:'/cssanimate',
            templateUrl: "../templates/css-animate-tmpl.html"
        })
        .state('pixlr',{
            url:'/pixlr',
            templateUrl: "../templates/pixlr-tmpl.html"
        })
        .state('cssgradient',{
            url:'/cssgradient',
            templateUrl: "../templates/cssgradient-tmpl.html"
        })
        .state('flexfroggy',{
            url:'/flexfroggy',
            templateUrl: "../templates/css-flexbox-tmpl.html"
        })
        .state('boxModelDemo',{
            url:'/boxModelDemo',
            templateUrl: "../templates/box-model-tmpl.html"
        })
        .state('enjoyCss',{
            url:'/enjoyCss',
            templateUrl: "../templates/css-enjoy-tmpl.html"
        })
        .state('home',{
            url:'/home',
            templateUrl: "../templates/home-tmpl.html"
        })
        .state('origin',{
            url:'/origin',
            templateUrl: "../templates/origin-tmpl.html"
        })



        $urlRouterProvider
            .otherwise('/');
    });
