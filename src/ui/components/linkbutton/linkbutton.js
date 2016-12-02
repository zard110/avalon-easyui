define([
  'angular',
  'jquery',
  'easyui/linkbutton'
], function(ng, $) {

  return ng.module('centit.ui.linkbutton', [])
    .directive('xtLinkbutton', LinkbuttonDirective);

  ////////////////////////////////

  /* @ngInject */
  function LinkbuttonDirective() {
    return {
      restrict: 'EA',
      scope: true,
      link: link
    };

    ////////////////////////////////

    function link(scope, element) {
      element = $(element[0]);
      element.linkbutton();
    }
  }
});
