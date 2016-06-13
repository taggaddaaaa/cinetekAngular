'use strict';

angular.module('cinetekAngular')
  .controller('DetailsController', function ($scope, $location, $window, NOTE_SELECT, Movies) {
    $scope.movies = Movies.getMovies();
    $scope.movieSuccess = false;
    $scope.movieError = false;
    $scope.movie = {};
    $scope.select = NOTE_SELECT;
    $scope.movie.rate = NOTE_SELECT[2];
    $scope.movie.poster = {};
    $scope.movie.actors = [{}];



    // ===================================
    // ========= Function update =========
    // ===================================
    $scope.update = function (movie) {
      Movies.updateMovie(movie)
        .then(function () {
          $scope.updatedSuccess = true;
          $window.scrollTo(0, 0);
        })
        .catch(function () {
          $scope.updatedError = true;
        });
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

    // ================================
    // ========= Upload image =========
    // ================================
    scope.fileChanged = function () {
      var file = element.find('#fileUpload').get(0).files[0];
      var fileReader = new FileReader();

      fileReader.addEventListener("load", function () {
        file = fileReader.result;
        scope.movie.poster = file;
      }, false);

      if (file) {
        fileReader.readAsDataURL(file);
      }

    };

    ////////////////////////////////////////
    // ========= Function redirect =========
    ////////////////////////////////////////
    $scope.redirect = function (path) {
      $location.path(path);
    }



  });
