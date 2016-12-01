define([
  'angular',
  'jquery',
  'easyui/textbox'
], function(ng, $) {
  return ng.module('centit.ui.textbox', [])
    .directive('xtTextbox', TextboxDirective);

  ////////////////////////////////

  /* @ngInject */
  function TextboxDirective() {
    return {
      restrict: 'EA',
      scope: true,
      require: 'ngModel',
      link: link
    };

    ////////////////////////////////

    function link(scope, element, attrs, ngModel) {
      element = $(element[0]);

      element.textbox()
        .textbox('textbox')
        .bind('blur', function() {
          scope.$apply(function() {
            ngModel.$setViewValue(element.textbox('getValue'));
          });
        });

      ngModel.$render = function() {
        element.textbox('setValue', ngModel.$viewValue);
      }
    }
  }
});
