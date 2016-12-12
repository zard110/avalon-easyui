define([
  'angular',
  'ui.router',
  'oc.lazyLoad',

  'admin/admin.config',
], function(ng) {

  return ng.module('centit.admin.router', [
    'ui.router',
    'oc.lazyLoad',
    'centit.admin.config'
  ])
    .config(RouterConfig);

  ////////////////////////////////

  function RouterConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
      .otherwise('/dashboard');

    var dashboardState = {
      name: 'dashboard',
      url: '/dashboard',

      lazyModule: 'centit.admin',
      lazyFiles: ['modules/user/user-list.ctrl.js'],
      templateUrl: 'modules/user/user-list.html',
      controller: 'UserListController'
    };

    $stateProvider.state(dashboardState);
  }
});
