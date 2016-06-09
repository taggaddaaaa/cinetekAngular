(function() {
  'use strict';

  angular
    .module('cinetekAngular')
    .constant('moment', moment)
    .constant('FIREBASE_URL', 'https://cinetek.firebaseio.com/')
    .constant('NOTE_SELECT',
      [
          {label: 'nul', value: 0},
          {label: 'mauvais', value: 1},
          {label: 'moyen', value: 2},
          {label: 'bon', value: 3},
          {label: 'excellent', value: 4}

      ]
    );

})();
