(function() {
  'use strict';
  
  angular
    .module('cinetekAngular')
    .controller('editController', editController);
    function editController ($scope, $routeParams, Bdd) {

      var id = $routeParams.id;
    
      $scope.movie = Bdd.get(id);
      $scope.save = Bdd.save($scope.movie);

      $scope.delete = function (movie) {
        Bdd.delete(movie)
      };
    }
})();