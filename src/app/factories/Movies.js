angular.module('cinetekAngular')
  .factory('Movies', function (FIREBASE_URL, $firebaseArray) {
    var ref = new Firebase(FIREBASE_URL + '/movies');
    var list = $firebaseArray(ref);

    function getMovies() {
      return list;
    }


    // =====================================
    // ====== Function deleteMovie =========
    // =====================================
    function deleteMovie (movie) {
      return list.$remove(movie)
        .then(function (movie) {
        })
        .catch(function (error) {
        });
    }

    // =====================================
    // ========= Function addMovie =========
    // =====================================
    function addMovie(movie) {
      return list.$add(
        {
          title: movie.title,
          director: movie.director,
          //actors: movie.actors,
          poster: movie.poster,
          //rate: movie.rate,
          synopsis: movie.synopsis,
          year: movie.year
        }
        )
        .then(function (movie) {
        })
        .catch(function (error) {
        });
    }

    // =====================================
    // ====== Function updateMovie =========
    // =====================================
    function updateMovie (id) {
      return list.$save(id)
        .then(function (movie) {
        })
        .catch(function (error) {
        })
    }


    // =====================================
    // ====== Function getMovie ============
    // =====================================
    function getMovie(id) {
      return list.$loaded()
        .then(function(data) {
          return data.$getRecord(id);
        }).catch(function(error) {
        })
    }

    return {
      getMovies: getMovies,
      deleteMovie: deleteMovie,
      addMovie: addMovie,
      updateMovie: updateMovie,
      getMovie: getMovie
    };
  });
