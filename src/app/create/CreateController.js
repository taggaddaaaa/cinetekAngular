'use strict';

angular.module('cinetekAngular')
  .controller('CreateController', function ($scope, $location, NOTE_SELECT, Movies) {
    $scope.movie = {};
    $scope.movie.poster = {};
    $scope.movie.actors = [{}];

    // =====================================
    // ========= Function addMovie =========
    // =====================================
    $scope.addMovie = function () {

      Movies.addMovie($scope.movie)
        .then(function () {
          $scope.movieSuccess = true;
          $scope.movieError = false;
        })
        .catch(function () {
          $scope.movieSuccess = false;
          $scope.movieError = true;
        })
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

    ////////////////////////////////////////
    // ========= Function redirect =========
    ////////////////////////////////////////
    $scope.redirect = function (path) {
      $location.path(path);
    }

  });
