(function () {
  'use strict';

  angular.module('cinetekAngular').directive('topMenu', topMenu);

  function topMenu($location) {
      return {
        templateUrl: 'app/directives/top-menu/top-menu.html',
        restrict: 'E',
        controller : function ($scope, user) {

          $scope.$watch(function(){return $scope.filterByTitle}, function (newValue) {
            console.log(newValue);
            $location.search('search', newValue);
          });
          

          $scope.$watch('searchText', function(newValue, oldValue){
            if(newValue != oldValue && newValue != "") {
              $location.search('searchText', newValue);
            }
          });


          $scope.filterByTiltle = "";

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
