define([
  'angular',
  'jquery',
  'easyui/layout'
], function(ng, $) {
  return ng.module('centit.ui.layout', [])
    .directive('xtLayout', LayoutDirective);

  ////////////////////////////////

  /* @ngInject */
  function LayoutDirective() {
    return {
      restrict: 'EA',
      scope: true,
      link: link
    };

    ////////////////////////////////

    function link(scope, element) {
      $(element[0]).layout({
        fit: true
      });
    }
  }
});
