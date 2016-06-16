'use strict';

angular.module('cinetekAngular')
  .controller('ListController', function ($location, $scope, Movies) {

    $('.carousel').carousel();

    $scope.movies = Movies.getMovies();
    $scope.movieSuccess = false;
    $scope.movieError = false;
    $scope.filterByTiltle = $location.search().search;

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
