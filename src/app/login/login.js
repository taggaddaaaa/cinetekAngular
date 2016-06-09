(function() {
  'use strict';
  
  angular
    .module('cinetekAngular')
    .controller('signinController', ['$rootScope', '$location', function ($scope, $location, user) {
      
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

    }]);

})();
