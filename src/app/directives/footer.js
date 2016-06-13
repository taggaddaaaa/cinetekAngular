'use strict';

angular
  .module('cinetekAngular')
  .directive('footer', function () {
    return {
      template: '<footer class="mdl-mini-footer">' +
      '<ul class="mdl-mini-footer--link-list">' +
      '<li><a href="https=www.sabinecaizergues.fr">TAGGADDAAAA</a></li>' +
      '<li><p> 06/2016</p></li></ul></footer>',
      restrict: 'E'
    };
  });
