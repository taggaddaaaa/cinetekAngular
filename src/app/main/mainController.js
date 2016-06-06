(function() {
    'use strict';

    angular
    .module('cinetekAngular')
    .controller('MainCtrl', MainCtrl);
    
    function MainCtrl ($scope, Bdd) {

        $scope.movies = Bdd.list();
        console.log('$scope.movies', $scope.movies);

}


})();