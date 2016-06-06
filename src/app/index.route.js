(function() {
  'use strict';

  angular
    .module('cinetekAngular')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider

        .when('/main', {
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
        })
        .when('/details/:id',{
            templateUrl: 'app/components/details/details.html',
            controller: 'detailsController'
        })
        .when('/edit/:id', {
            templateUrl: 'app/components/edit/edit.html',
            controller: 'editController'
        })
        .when('/create', {
            templateUrl: 'app/components/create/create.html',
            controller: 'createController'
        })
        .otherwise({
            redirectTo: '/main'
        });
  }

})();
