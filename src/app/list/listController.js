'use strict';

angular.module('cinetekAngular')
  .controller('ListController', function ($location, $scope, Movies) {
    $scope.movies = Movies.getMovies();
    $scope.movieSuccess = false;
    $scope.movieError = false;

    //////////////////////////////////////
    // ========= Function remove =========
    //////////////////////////////////////
    $scope.delete = function(movie) {
      Movies.deleteMovie(movie)
        .then(function () {
          $scope.movieSuccess = true;
          $scope.movieError = false;
        })
        .catch(function () {
          $scope.movieSuccess = false;
          $scope.movieError = true;
        });
    };
    ////////////////////////////////////////
    // ========= Function redirect =========
    ////////////////////////////////////////
    $scope.redirect = function (path) {
      $location.path(path);
    }

    
  });
