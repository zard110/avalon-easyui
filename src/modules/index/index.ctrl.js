define([
  'angular'
], function(ng) {
  return ng.module('index.ctrl', [])
    .controller('IndexController', IndexController);

  ////////////////////////////////

  /* @ngInject */
  function IndexController($timeout) {
    var vm = this;

    vm.title = 'Centit UI';
    vm.index = 4;
    vm.user = {};

    $timeout(function() {
      vm.items = [
        {id: 1, name: 'zk', sex: "1"},
        {id: 2, name: 'pyq', sex: "0"},
        {id: 3, name: 'zpa', sex: "1"}
      ];
    }, 1000);
  }
});
