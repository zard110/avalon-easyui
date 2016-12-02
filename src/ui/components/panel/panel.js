define([
  'angular',
  'jquery',
  'easyui/panel'
], function (ng, $, panel) {

  init(panel);

  return ng.module('centit.ui.panel', [])
    .directive('xtPanel', PanelDirective);

  ////////////////////////////////

  function init(panel) {
    panel.loader = function () {

    }
  }

  /* @ngInject */
  function PanelDirective($timeout, $compile) {
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

      $timeout(function () {
        element.panel();
      });
    }

    function loader(params, success, error) {
      var options = $(this).panel("options");
      if (!options.href) {
        return false;
      }
      $.ajax({
        type: options.method, url: options.href, cache: false, data: params, dataType: "html", success: function (html) {
          success(html);
        }, error: function () {
          error.apply(this, arguments);
        }
      });
    }
  }
});
