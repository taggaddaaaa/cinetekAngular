(function() {
  'use strict';
  
  angular
    .module('cinetekAngular')
    .controller('createController', createController);


  function createController($scope, $routeParams, Bdd) {

    var id = $routeParams.id;

    $scope.movie = Bdd.get(id);

    $scope.ratingPossible = [
      {label: 'nul', value: 0},
      {label: 'mauvais', value: 1},
      {label:'moyen', value: 2},
      {label: 'bon', value: 3},
      {label: 'excellent', value: 4}
    ];

    $scope.create = function (movie) {
      Bdd.create(movie);
    };

  }

})();