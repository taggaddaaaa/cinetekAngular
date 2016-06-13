'use strict';

angular.module('cinetekAngular')
  .controller('DetailsController', function ($scope, NOTE_SELECT, Movies) {
    $scope.movieSuccess = false;
    $scope.movieError = false;
    $scope.movie = {};
    $scope.select = NOTE_SELECT;
    $scope.movie.rate = NOTE_SELECT[2];
    $scope.movie.poster = {};
    $scope.movie.actors = [{}];

  });
