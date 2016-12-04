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
      element = $(element[0]);

      element.layout({
        fit: true
      });

      console.log('layout: ' + element.attr('id') + ' is init');
    }
  }
});
