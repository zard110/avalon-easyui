define([
  'angular',
  'config',
  'ui/main',

  'modules/index/index.ctrl'
], function(ng, config, ui, ctrl) {
  ng.module(config.name, [ui.name, ctrl.name]);
});
