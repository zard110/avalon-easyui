/**
 * bootstraps angular onto the window.document node
 */
define([
  'require',
  'angular',
  'centit.admin'
], function (
  require,
  ng
) {
  'use strict';

  require(['domReady!'], function (document) {
    ng.bootstrap(document, ['centit.admin']);
  });
});
