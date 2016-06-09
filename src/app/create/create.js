'use strict';

angular.module('cinetekAngular')
  .controller('CreateController', function ($scope, NOTE_SELECT) {
    $scope.movieSuccess = false;
    $scope.movieError = false;
    $scope.movie = {};
    $scope.select = NOTE_SELECT;
    $scope.movie.rate = NOTE_SELECT[2];
    $scope.movie.poster = {};
    $scope.movie.actors = [{}];

  });
