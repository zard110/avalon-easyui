/**
 * bootstraps angular onto the window.document node
 */
define([
  'require',
  'angular',
  'config',
  'centit.ui',
  'modules/index/index.ctrl',
  'modules/user/user.ctrl'
], function (
  require,
  ng,
  config,
  ui,
  index,
  user
) {
  'use strict';

  ng.module(config.name, [
    ui.name,
    index.name,
    user.name
  ]);

  require(['domReady!'], function (document) {
    ng.bootstrap(document, [config.name]);
  });
});
