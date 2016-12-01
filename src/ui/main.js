define([
  'angular',
  'components/layout/layout',
  'components/datagrid/datagrid',
  'ui.theme'
], function (ng, layout, datagrid) {
  'use strict';

  return ng.module('centit.ui', [
    layout.name,
    datagrid.name
  ]);
});
