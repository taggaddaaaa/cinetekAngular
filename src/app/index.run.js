(function() {
  'use strict';

  angular
    .module('cinetekAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
