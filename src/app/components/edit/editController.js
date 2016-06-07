(function() {
  'use strict';

  angular
    .module('cinetekAngular')
    .controller('editController', editController);

    function editController ($scope, $firebaseObject, $routeParams, detailMovie) {

      var name = $routeParams.name;

      var id = detailMovie.getId();

      var path = '';

      if (id) {
        path = 'https://cinetek.firebaseio.com/db/films/' + id;
        var ref = new Firebase(path);
        $scope.movie =  $firebaseObject(ref);
      }
      else {
        path = 'https://cinetek.firebaseio.com/db/films/';
        ref = new Firebase(path);
        ref.orderByChild('name').equalTo(name).on("child_added", function (snap) {
          $scope.$apply(function () {
            $scope.movie = snap.val();
          });
          console.log('snap', snap.val());
        })
      }


      $scope.ratingPossible = [
        {label: 'nul', value: 0},
        {label: 'mauvais', value: 1},
        {label: 'moyen', value: 2},
        {label: 'bon', value: 3},
        {label: 'excellent', value: 4}
      ];

      $scope.delete = function (movie) {
        Bdd.delete(movie)
      };
    }
})();
