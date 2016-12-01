requirejs.config({
  baseUrl: '.',
  paths: {
    // 路径配置
    'core': 'ui/core',
    'components': 'ui/components',
    'styles': 'ui/styles',
    'themes': 'ui/themes',

    // 第三方插件配置
    'angular': 'libs/angular/1.5.9/angular',
    'jquery': 'libs/jquery/3.1.1/jquery',
    'es6-promise': 'libs/es6-promise/4.0.5/es6-promise',

    // easyui 配置
    'easyui': 'libs/easyui/1.5.0/plugins',
    'easyui.theme': 'libs/easyui/1.5.0/themes/default',

    // 主题配置
    'ui.theme': 'ui/themes/qui/theme'
  },

  shim: {
    'angular': {
      exports: 'angular'
    }
  },

  map: {
    '*': {
      'css': 'libs/requirejs/css'
    }
  }
});

define('config', {
  name: 'centit'
});

// 框架入口
requirejs(['angular', 'config'], function(angular, config) {
  angular.module(config.name, []);
  requirejs(['ui/main', 'index']);
});
