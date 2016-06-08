(function () {
    'use strict';

  angular
    .module('cinetekAngular')
    .factory('Movies', function ($resource, $timeout, $q, Tools, SERVER_URL) {

    var Movies = $resource(SERVER_URL + 'movies/:id', {id: '@id'}, {
      'saveMovie': {method: 'PUT'}
    });


    function getModifiedList() {
      var defer = $q.defer();

      Movies.query(
        function success(data) {
          var result = data.map(function (element) {
            element.lastViewDate = Tools.dateFormat(element.lastViewDate);
            return element;
          });

          defer.resolve(result);

        }, function error(error) {
          defer.reject(error);
        });

      return defer.promise;
    }

    function myPromyse(tab) {

      var defer = $q.defer();

      if (!tab.length) {
        defer.reject('array argument must be greater than 0')
      }
      else {
        $timeout(function () {
          defer.resolve(tab.filter(function (element) {
            return element.title === 'Avatar';
          }))
        }, 1000);
      }
      return defer.promise
    }
      
    function getOriginalList() {
      return Movies.query();
    }

    return {
      getModified: getModifiedList,
      filterAvatar: myPromyse,
      get: getOriginalList
    }


  })
    .factory('Tools', function () {

      return {
        dateFormat: function dateFormat(date) {
          return new Date(date).toDateString();
        }
      }

    })
    .constant('SERVER_URL', 'http://localhost:3001/server/api/');

})();
