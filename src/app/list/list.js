'use strict';

angular.module('cinetekAngular')
  .controller('ListController', function ($scope, Movies) {
    $scope.movies = Movies.getMovies();
    $scope.movieSuccess = false;
    $scope.movieError = false;
  });
