/**
 * bootstraps angular onto the window.document node
 */
define([
  'require',
  'angular',
  'config',

  'index'
], function (require, ng, config) {
  'use strict';

  require(['domReady!'], function (document) {
    ng.bootstrap(document, [config.name]);
  });
});
