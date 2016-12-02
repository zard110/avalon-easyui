define([
  'angular',
  'jquery',
  'easyui/panel'
], function(ng, $) {
  return ng.module('centit.ui.panel', [])
    .directive('xtPanel', PanelDirective);

  ////////////////////////////////

  /* @ngInject */
  function PanelDirective($timeout) {
    return {
      restrict: 'EA',
      scope: {
        item: '='
      },
      link: link
    };

    ////////////////////////////////

    function link(scope, element) {
      element = $(element[0]);

      $timeout(function() {
        element.panel();
      });
    }
  }
});
