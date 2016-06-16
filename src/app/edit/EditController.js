'use strict';

angular.module('cinetekAngular')
  .controller('EditController', function ($scope, $routeParams, $location, Movies) {
    $scope.movie = Movies.getMovie($routeParams.id);
    Movies.getMovie($routeParams.id).then(function (aMovie) {
      $scope.movie = aMovie;
    });

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

