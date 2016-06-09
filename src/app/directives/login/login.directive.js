'use strict';

angular.module('cinetekAngular')
  .directive('login', function () {
    return {
      templateUrl: 'app/directives/login/login.template.html',
      restrict: 'E',
      controller: function ($scope, user) {
        if (user.isConnected()) {
          $location.path('/')
        }

        var initUser = {
          email : '',
          password : ''
        };
        $scope.user = angular.copy(initUser);

        $scope.reset = function () {
          $scope.user = angular.copy(initUser);
        };


        $scope.connect = function (email, password) {
          user.connect(email, password);
        };
      }
    };
  });
