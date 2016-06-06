(function() {
    'use strict';
    
    angular
    .module('cinetekAngular')
        .controller('detailsController', detailsController);
    
    
    
    function detailsController ($scope, Bdd, $routeParams) {

      var id = $routeParams.id;

        $scope.movie = Bdd.get(id);
        
      $scope.ratingPossible = [
        {label: 'nul', value: 0},
        {label: 'mauvais', value: 1},
        {label:'moyen', value: 2},
        {label: 'bon', value: 3},
        {label: 'excellent', value: 4}
      ];

      $scope.delete = function (movie) {
          Bdd.delete(movie)
      };
    }
})();
