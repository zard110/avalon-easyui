define([
  'angular',
  './user.module'
], function(ng, User) {
  return User.controller('UserInfoController', UserInfoController);

  ////////////////////////////////

  /* @ngInject */
  function UserInfoController($scope) {
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
