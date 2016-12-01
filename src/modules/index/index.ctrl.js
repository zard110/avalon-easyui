define([
  'angular'
], function(ng) {
  return ng.module('index.ctrl', [])
    .controller('IndexController', IndexController);

  ////////////////////////////////

  function IndexController() {
    var vm = this;
    vm.name = 'world';
  }
});
