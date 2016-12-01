define([
  'angular',
  'components/layout/layout',
  'components/datagrid/datagrid',
  'components/textbox/textbox',
  'ui.theme'
], function (ng,
             layout,
             datagrid,
             textbox
) {
  'use strict';

  return ng.module('centit.ui', [
    layout.name,
    datagrid.name,
    textbox.name
  ]);
});
