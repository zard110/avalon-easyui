requirejs.config({
  baseUrl: '.',
  paths: {
    // 路径配置
    'core': 'ui/core',
    'components': 'ui/components',
    'styles': 'ui/styles',
    'themes': 'ui/themes',
    'modules': 'modules',

    // centit-ui 配置
    'centit.ui': 'ui/main',

    // centit-admin 配置
    'centit.admin': 'admin/main',

    // 第三方插件配置
    'angular': 'lib/angular/1.5.9/angular',
    'angular.resource': 'lib/angular-resource/1.6.0/angular-resource',
    'ui.router': 'lib/angular-ui-router/0.3.2/angular-ui-router.min',
    'jquery': 'lib/jquery/3.1.1/jquery',
    'es6.promise': 'lib/es6-promise/4.0.5/es6-promise',
    'oc.lazyLoad': 'lib/oc-lazyload/1.0.9/ocLazyLoad.require',
    'domReady': 'lib/requirejs/domReady',

    // easyui 配置
    'easyui': 'lib/easyui/1.5.0/plugins',
    'easyui.locale': 'lib/easyui/1.5.0/locale/easyui-lang-zh_CN',
    'easyui.theme': 'lib/easyui/1.5.0/themes/default',
    'easyui.style': 'lib/easyui/1.5.0/themes',

    // 主题配置
    'ui.theme': 'ui/themes/qui/theme'
  },

  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular.resource': ['angular'],
    'ui.router': ['angular'],
    'oc.lazyLoad': ['angular']
  },

  map: {
    '*': {
      'css': 'lib/requirejs/css'
    }
  },

  deps: ['./bootstrap']
});
