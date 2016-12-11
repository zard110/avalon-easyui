define([
  'angular',
  'easyui.locale',
  './components/layout/layout',
  'components/datagrid/datagrid',
  'components/textbox/textbox',
  'components/combobox/combobox',
  'components/linkbutton/linkbutton',
  'components/panel/panel',
  'components/validatebox/validatebox',
  'ui.theme'
], function (ng,
             translate,
             layout,
             datagrid,
             textbox,
             combobox,
             linkbutton,
             panel,
             validatebox
) {
  'use strict';

  translate();

  return ng.module('centit.ui', [
    layout.name,
    datagrid.name,
    textbox.name,
    combobox.name,
    linkbutton.name,
    panel.name,
    validatebox.name
  ]);
});
