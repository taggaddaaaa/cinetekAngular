'use strict';
angular.module('cinetekAngular')
  .controller('EditController', function ($scope, $routeParams, Movies) {
    $scope.movie = Movies.getMovieById();
    $scope.movieSuccess = false;
    $scope.movieError = false;

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
    };

    
    console.log('movie', movie);
  });

