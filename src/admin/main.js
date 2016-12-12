define([
  'angular',

  'centit.ui',

  'admin/admin.config',
  'admin/admin.controller',
  'admin/admin.router'
], function(ng) {
  return ng.module('centit.admin', [
    'centit.ui',

    'centit.admin.config',
    'centit.admin.controller',
    'centit.admin.router'
  ]);
});
