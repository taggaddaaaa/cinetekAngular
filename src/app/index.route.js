(function() {
  'use strict';

  angular
    .module('cinetekAngular')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'app/components/main/main.html',
            controller: 'mainController'
        })
        .when('/details/:name',{
            templateUrl: 'app/components/details/details.html',
            controller: 'detailsController'
        })
        .when('/edit/:name', {
            templateUrl: 'app/components/edit/edit.html',
            controller: 'editController'
        })
        .when('/create', {
            templateUrl: 'app/components/create/create.html',
            controller: 'createController'
        }).when('/login', {
            templateUrl: 'app/components/login/signin.html',
            controller: 'signinController'
        })
        .otherwise({
            redirectTo: '/'
        });
  }

})();
