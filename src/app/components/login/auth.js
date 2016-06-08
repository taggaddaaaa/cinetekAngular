(function() {
    'use strict';

    angular
        .module('cinetekAngular')
        .factory('authRef', [ '$firebaseAuth', function ($firebaseAuth) {
          var ref = new Firebase("https://cinetek.firebaseio.com");
          return $firebaseAuth(ref);
        }]);

})();
