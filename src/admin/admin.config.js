define([
  'angular',

  'oc.lazyLoad'
], function(ng) {

  return ng.module('centit.admin.config', ['oc.lazyLoad'])
    .config(OcLazyLoadConfig);

  ////////////////////////////////

  /* @ngInject */
  function OcLazyLoadConfig($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
      debug: false,
      events: true
    });
  }
});
