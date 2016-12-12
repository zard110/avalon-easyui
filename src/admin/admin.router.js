define([
  'angular',
  'ui.router',
  'oc.lazyLoad'
], function(ng) {

  return ng.module('centit.admin.router', ['ui.router', 'oc.lazyLoad'])
    .config(RouterConfig);

  ////////////////////////////////

  function RouterConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
      .otherwise('/dashboard');

    var helloState = {
      name: 'dashboard',
      url: '/dashboard',
      templateUrl: 'modules/user/user-list.html',
      resolve : loadSequence('centit.admin.modules.user')
    };

    $stateProvider.state(helloState);

    // Generates a resolve object previously configured in constant.JS_REQUIRES (config.constant.js)
    function loadSequence() {
      var _args = arguments;
      return {
        deps: ['$ocLazyLoad', '$q',
          function ($ocLL, $q) {
            var promise = $q.when(1);
            for (var i = 0, len = _args.length; i < len; i++) {
              promise = promiseThen(_args[i]);
            }
            return promise;

            function promiseThen(_arg) {
              if (typeof _arg == 'function')
                return promise.then(_arg);
              else
                return promise.then(function () {
                  var nowLoad = requiredData(_arg);
                  if (!nowLoad)
                    return console.error('Route resolve: Bad resource name [' + _arg + ']');
                  return $ocLL.load(nowLoad);
                });
            }

            function requiredData(name) {
              // if (jsRequires.modules)
              //   for (var m in jsRequires.modules)
              //     if (jsRequires.modules[m].name && jsRequires.modules[m].name === name)
              //       return jsRequires.modules[m];
              // return jsRequires.scripts && jsRequires.scripts[name];
              return ['modules/user/user-info.ctrl.js', 'modules/user/user-list.ctrl.js'];
            }
          }]
      };
    }
  }
});
