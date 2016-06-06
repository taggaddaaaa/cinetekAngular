(function () {
    'use strict';

    angular
        .module('cinetekAngular')
        .factory('Bdd', Bdd);

    function Bdd($firebaseArray) {

        var ref = new Firebase('https://cinetek.firebaseio.com/db/films');
        
        return  $firebaseArray(ref);
        
    }

})();