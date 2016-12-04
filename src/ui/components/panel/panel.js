define([
  'angular',
  'jquery',
  'easyui/panel'
], function (ng, $, $panel) {

  return ng.module('centit.ui.panel', [])
    .directive('xtPanel', PanelDirective);

  ////////////////////////////////

  /* @ngInject */
  function PanelDirective($timeout, $compile) {

    // 替换panel默认loader，使angular可以$compile
    $panel.loader = loader;

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
      console.log('panel is init');

      $timeout(function() {
        element.data('$scope', scope);
        element.panel();
      });
    }

    function loader(params, success, error) {
      success = callback;
      var options = $(this).panel("options");
      if (!options.href) return false;

      $.ajax({
        type: options.method,
        url: options.href,
        data: params,
        dataType: "html"
      })
        .then(success.bind(this))
        .catch(error.bind(this));
    }

    function callback(html) {
      var panel = $(this),
        options = panel.panel("options"),
        $scope = panel.data('$scope'),
        $child = $(options.extractor.call(this, html));

      panel.panel('clear');
      panel.append($child);
      options.onLoad.apply(this, arguments);
      $.data(this, "panel").isLoaded = true;
      $compile(panel.children())($scope);
      console.log('panel loaded');
    }
  }
});
