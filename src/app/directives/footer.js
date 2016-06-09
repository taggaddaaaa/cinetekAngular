'use strict';

angular
  .module('cinetekAngular')
  .directive('footer', function () {
    return {
      template: '<div class="footer">' +
      ' <div class="container"> ' +
      '<p>2016 <span class="glyphicon glyphicon-heart"></span> Taggaddaaaa</p> ' +
      '</div> ' +
      '</div>',
      restrict: 'E'
    };
  });
