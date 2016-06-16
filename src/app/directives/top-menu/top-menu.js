(function () {
  'use strict';

  angular
    .module('cinetekAngular')
    .directive('topMenu', topMenu);
  function topMenu($location) {
      return {
        templateUrl: 'app/directives/top-menu/top-menu.html',
        restrict: 'E',
        controller : function ($scope, user) {

          $scope.$watch(function () {
            return user.isConnected();
          }, function () {
            $scope.user = user.get();
          });

          $scope.isConnected = function () {
            return user.isConnected();
          };

          $scope.redirect = function (path) {
            $location.path(path);
          };

          $scope.disconnect = function () {
            user.disconnect();
          }
        }
      };

  }

})();
