'use strict';

angular.module('cinetekAngular')
  .directive('authorization', function () {
    return {
      restrict: 'A',
      controller: function (user) {
        user.validConnection();
      }
    }
  });
