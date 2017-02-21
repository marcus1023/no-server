angular.module('excelCourses',  ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
      .state('home',{
          url:'/home',
          templateUrl: "./js/templates/home-tmpl.html",
          controller: "mainController"
      })
      .state("services",{
          url:'/services',
          templateUrl: "./JS/templates/services.html",
          controller: "mainController"
      })



        $urlRouterProvider
        .when('/', '/home')
            .otherwise('/');
    });
