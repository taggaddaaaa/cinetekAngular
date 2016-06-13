// 'use strict';
//
// angular.module('cinetekAngular')
//   .controller('UpdateController', function ($scope, Movies, $routeParams, NOTE_SELECT) {
//     $scope.updatedSuccess = false;
//     $scope.updatedError = false;
//
//     var id = $routeParams.id;
//     Movies.getMovie(id)
//       .then(function (data) {
//         $scope.movie = data;
//         $scope.select = NOTE_SELECT;
//         $scope.movie.rate = NOTE_SELECT[$scope.movie.rate.id-1];
//       })
//       .catch(function () {
//
//       });
//   });


'use strict';
angular.module('cinetekAngular')
  .controller('EditController', function ($scope, Movies, $location) {
    // ===================================
    // ========= Function update =========
    // ===================================
    $scope.update = function (movie) {
      Movies.updateMovie(movie)
    };

    // ==============================================
    // ========= Function add/remove actors =========
    // ==============================================
    $scope.addingActor = function () {
      $scope.movie.actors.push({})
    };

    $scope.removeActor = function (index) {
      $scope.movie.actors.splice(index, 1);
    };

    // =====================================
    // ========= Function redirect =========
    // =====================================
    $scope.redirect = function (path) {
      $location.path(path);
    }

  });

