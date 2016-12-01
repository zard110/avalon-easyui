define([
  'angular',
  'components/layout/layout',
  'components/datagrid/datagrid',
  'components/textbox/textbox',
  'components/combobox/combobox',
  'ui.theme'
], function (ng,
             layout,
             datagrid,
             textbox,
             combobox
) {
  'use strict';

  return ng.module('centit.ui', [
    layout.name,
    datagrid.name,
    textbox.name,
    combobox.name
  ]);
});
