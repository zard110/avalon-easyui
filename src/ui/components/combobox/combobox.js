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
      scope: {
        value: '=ngModel'
      },
      require: 'ngModel',
      link: link
    };

    ////////////////////////////////

    function link(scope, element, attrs, ngModel) {
      element = $(element[0]);

      element.combobox({
        validateOnCreate: false,
        prompt: '——请选择——',
        onChange: function(newValue) {

          // 忽略来自$watch的改变值
          if (options.ignoreChange) {
            options.ignoreChange = false;
            return;
          }

          scope.$apply(function() {
            ngModel.$setViewValue(newValue);
          });
        }
      });

      var options = element.data('combobox').options;
      scope.$watch('value', function() {
        options.ignoreChange = true;
        element.combobox('setValue', ngModel.$viewValue);
      });
    }
  }
});
