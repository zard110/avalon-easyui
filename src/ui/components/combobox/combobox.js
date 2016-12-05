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
      require: ['ngModel', '^form'],
      link: link
    };

    ////////////////////////////////

    function link(scope, element, attrs, ctrls) {
      var ngModel = ctrls[0],
        Form = ctrls[1];

      element = $(element[0]);

      var ignoreChange = false,
        ignoreModelChange = false;

      element.combobox({
        validateOnCreate: false,
        prompt: '——请选择——',
        value: '',

        onSelect: function(item) {

          // 忽略来自$watch的改变值
          if (ignoreChange) {
            ignoreChange = false;
            return;
          }

          scope.$apply(function() {
            ignoreModelChange = true;
            ngModel.$setViewValue(item.value);
          });
        }
      });

      if (!Form['$validateboxes']) {
        Form['$validateboxes'] = [element.textbox('textbox')];
      }
      else {
        Form['$validateboxes'].push(element.textbox('textbox'));
      }

      scope.$watch('value', function() {
        // 防止循环依赖改变
        if (ignoreModelChange) {
          ignoreModelChange = false;
          return;
        }

        ignoreChange = true;
        element.combobox('setValue', ngModel.$viewValue);
      });
    }
  }
});
