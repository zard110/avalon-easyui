define(['angular', 'config'], function(angular, config) {

  angular.module(config.name)
    .controller('IndexController', IndexController);

  /* @ngInject */
  function IndexController() {
    var vm = this;

    vm.name = 'world';
  }

});
