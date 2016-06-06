(function() {
    'use strict';
    
    angular
    .module('cinetekAngular')
    .factory('Bdd', Bdd);

    function Bdd( $firebaseArray, $firebaseAuth) {

          var ref = new Firebase('https://cinetek.firebaseio.com/db/films');

          var authObj = $firebaseAuth(ref);

          authObj.$authWithPassword({
            email    : "sabinecaizergues@hotmail.com ",
            password : "BQuEMF3u4qgRtU8a"
          }).then(function(authData) {
            console.log("logged in as:", authData.uid);
          }).catch(function(error){
            console.error("Authentification failed", error);
          });

          var movies = $firebaseArray(ref);
          movies.$loaded()
            .then(function(x) {
              console.log(movies);
            })
            .catch(function(error) {
              console.log("Error:", error);
            });
        
        
        function createMovie(movie) {
            movies.$add(movie);
        }
        
        function deleteMovie(movie) {
            movies.$remove(movie);
        }
        
        function changeMovie(movie){
            movies.$save(movie);
        }

        var giveMeAMovie = function (id) {
            return movies.filter(function(movie){
                return movie.name.includes(id);
            })[0];
        };
          return {
              list: function () {
                  return movies;
              },
              get: giveMeAMovie,
              save: changeMovie,
              create: createMovie,
              delete: deleteMovie
          };
        
    }

})();