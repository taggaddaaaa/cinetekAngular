'use strict';

angular.module('cinetekAngular')
  .factory('authService', function (FIREBASE_URL, $firebaseAuth) {
    var ref = new Firebase(FIREBASE_URL);
    return $firebaseAuth(ref);
  });
