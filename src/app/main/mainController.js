(function () {
    'use strict';

    angular
        .module('cinetekAngular')
        .factory('detailMovie', function () {
            var movie = {
                id: '',
                name: ''
            };

            function setMovie(id, name) {
                movie.id = id;
                movie.name = name;
            }

            function getMovieId() {
                return movie.id;
            }

            return {
                getId: getMovieId,
                set: setMovie
            }

        })
        .controller('mainController', mainController);

    function mainController($scope, $location, Bdd, detailMovie) {

        $scope.goToMovie = function (movie) {
            detailMovie.set(movie.$id, movie.name);
            $location.path('details/' + movie.name + '/')
        };

        Bdd.$loaded().then(function (data) {
            $scope.movies = data;
        });
    }

})();