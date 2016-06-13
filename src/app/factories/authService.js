'use strict';

angular.module('cinetekAngular')
  .factory('authService', function ($firebaseAuth, FIREBASE_URL ) {


    // ===================================
    // =============== BDD ===============
    // ===================================
    var ref = new Firebase(FIREBASE_URL);
    return $firebaseAuth(ref);
  });
