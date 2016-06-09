(function() {
  'use strict';

  angular
    .module('cinetekAngular')
    .constant('moment', moment)
    .constant('FIREBASE_URL', 'https://cinetek.firebaseio.com/')
    .constant('NOTE_SELECT',
      [
        {id:1, name: 'mauvais'},
        {id:2, name: 'bof'},
        {id:3, name: 'moyen'},
        {id:4, name: 'pas mal'},
        {id:5, name: 'super'}
      ]
    );

})();
