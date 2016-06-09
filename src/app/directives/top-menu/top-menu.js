(function () {
  'use strict';

  angular
    .module('cinetekAngular')
    .directive('topMenu', topMenu);
  function topMenu() {
      return {
        templateUrl: 'app/main/top-menu.html',
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

          $scope.disconnect = function () {
            user.disconnect();
          }
        }
      };

  }

})();
