define([
  'angular',
  'jquery',
  'easyui/combobox'
], function(ng, $) {
  return ng.module('centit.ui.combo', [])
    .directive('xtCombobox', ComboboxDirective);

  ////////////////////////////////

  /* @ngInject */
  function ComboboxDirective() {
    return {
      restrict: 'EA',
      scope: true,
      require: 'ngModel',
      link: link
    };

    ////////////////////////////////

    function link(scope, element, attrs, ngModel) {
      element = $(element[0]);

      element.combobox({
        prompt: '123',
        onChange: function(newValue, oldValue) {
          scope.$apply(function() {
            ngModel.$setViewValue(newValue);
          });
        }
      });

      ngModel.$render = function() {
        console.log('combobox', ngModel.$viewValue)
        element.combobox('setValue', ngModel.$viewValue);
      };
    }
  }
});
