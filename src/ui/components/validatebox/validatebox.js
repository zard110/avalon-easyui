define([
  'angular',
  'jquery',
  'easyui/validatebox'
], function(ng, $) {
  return ng.module('centit.ui.validatebox', [])
    .directive('xtValidationSubmit', ValidationSubmit);

  ////////////////////////////////

  /* @ngInject */
  function ValidationSubmit($timeout, $parse) {
    return {
      restrict: 'EA',
      require: '?ngClick',
      scope: false,
      link: link,
      // after ng-click
      priority: 1
    };

    ////////////////////////////////

    function link(scope, element, attrs) {
      var form = $parse(attrs.xtValidationSubmit)(scope);

      $timeout(function() {
        element.off('click');
        element.on('click', function(e) {
          e.preventDefault();
          if (form.$valid) {
            $parse(attrs.ngClick)(scope);
          }
        })
      });
    }
  }
});
