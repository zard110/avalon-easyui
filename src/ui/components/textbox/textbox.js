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
      require: ['ngModel', '^form'],
      link: link
    };

    ////////////////////////////////

    function link(scope, element, attrs, ctrls) {
      var ngModel = ctrls[0],
        Form = ctrls[1];

      element = $(element[0]);
      console.log('text: '+ element.attr('name') + ' is init');

      element.textbox({
        validateOnCreate: false
      }).textbox('textbox')
        .bind('blur', function() {
          if (!$(this).validatebox('isValid')) return;

          scope.$apply(function() {
            ngModel.$setViewValue(element.textbox('getValue'));
          });
        });

      if (!Form['$validateboxes']) {
        Form['$validateboxes'] = [element.textbox('textbox')];
      }
      else {
        Form['$validateboxes'].push(element.textbox('textbox'));
      }

      console.log('isValid', element.textbox('textbox').validatebox('isValid'));

      ngModel.$render = function() {
        element.textbox('setValue', ngModel.$viewValue);
      }
    }
  }
});
