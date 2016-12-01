define([
  'angular',
  'jquery',
  'easyui/datagrid'
], function(ng, $) {
  return ng.module('centit.ui.datagrid', [])
    .directive('xtDatagrid', DatagridDirective);

  ////////////////////////////////

  function DatagridDirective() {
    return {
      restrict: 'EA',
      scope: {
        items: '='
      },
      link: link,
      controller: controller
    };

    ////////////////////////////////

    function controller($scope) {
      $scope.$watch('items', function(items) {
        if (!items) return;

        $scope.$el.datagrid('loadData', items);
      }, true);
    }

    function link(scope, element) {
      scope.$el = $(element[0]).datagrid({
        fit: true
      });
    }
  }
});
