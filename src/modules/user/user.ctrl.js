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
      vm.user = ng.extend({}, user);
    });

    $scope.submit = function() {
      // if ($scope.UserInfo.$valid) {
      //   ng.extend($scope.item, vm.user);
      // }


      var validateboxes = $scope.UserInfo['$validateboxes'];

      console.log(validateboxes.every(function(validatebox) {
        return validatebox.validatebox('isValid');
      }));
    }
  }
});
