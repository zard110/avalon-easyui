define([
  'angular'
], function(ng) {
  return ng.module('centit.admin.controller', [])
    .controller('CentitAdminController', CentitAdminController);

  ////////////////////////////////

  /* @ngInject */
  function CentitAdminController() {
    var vm = this;
    vm.title = 'Centit UI';
  }
});
