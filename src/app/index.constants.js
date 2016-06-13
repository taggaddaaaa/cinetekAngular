(function() {
  'use strict';

  angular
    .module('cinetekAngular')
    .constant('moment', moment)
    .constant('FIREBASE_URL', 'https://cinetek.firebaseio.com/')
    .constant('NOTE_SELECT',
      [
        {id:1, name: 'mauvais', label: "*"},
        {id:2, name: 'bof', label: "**"},
        {id:3, name: 'moyen', label: "***"},
        {id:4, name: 'pas mal', label: "****"},
        {id:5, name: 'super', label: "*****"}
      ]
    );

})();
