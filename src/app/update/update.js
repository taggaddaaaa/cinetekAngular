'use strict';

angular.module('cinetekAngular')
  .controller('UpdateController', function ($scope, Movies, $routeParams, NOTE_SELECT) {
    $scope.updatedSuccess = false;
    $scope.updatedError = false;

    var id = $routeParams.id;
    Movies.getMovie(id)
      .then(function (data) {
        $scope.movie = data;
        $scope.select = NOTE_SELECT;
        $scope.movie.rate = NOTE_SELECT[$scope.movie.rate.id-1];
      })
      .catch(function () {

      });
  });
