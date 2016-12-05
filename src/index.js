define([
  'angular',
  'config',
  'ui/main',

  'modules/index/index.ctrl',
  'modules/user/user.ctrl'
], function(ng, config, ui, index, user) {
  ng.module(config.name, [ui.name, index.name, user.name]);
});
