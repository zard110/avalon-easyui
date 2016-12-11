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

    // 第三方插件配置
    'angular': 'lib/angular/1.5.9/angular',
    'jquery': 'lib/jquery/3.1.1/jquery',
    'es6-promise': 'lib/es6-promise/4.0.5/es6-promise',
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
    }
  },

  map: {
    '*': {
      'css': 'lib/requirejs/css'
    }
  },

  deps: ['./bootstrap']
});

define('config', {
  name: 'centit'
});
