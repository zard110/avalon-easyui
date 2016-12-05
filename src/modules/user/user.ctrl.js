define([
  'angular'
], function(ng) {
  return ng.module('user.ctrl', [])
    .controller('UserController', UserController);

  ////////////////////////////////

  /* @ngInject */
  function UserController($scope) {
    var vm = this;

    $scope.$watch('item', function(user) {
      vm.user = user;
    });

    vm.submit = function() {
      alert(12312);
    }
  }
});
