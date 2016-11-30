requirejs.config({
  baseUrl: '.',
  paths: {
    // 路径配置
    'core': 'ui/core',
    'components': 'ui/components',
    'styles': 'ui/styles',
    'themes': 'ui/themes',

    // 第三方插件配置
    'avalon': 'libs/avalon/2.2.2/avalon',
    'jquery': 'libs/jquery/3.1.1/jquery',
    'es6-promise': 'libs/es6-promise/4.0.5/es6-promise',

    // easyui 配置
    'easyui': 'libs/easyui/1.5.0/plugins',
    'easyui.theme': 'libs/easyui/1.5.0/themes/default',

    // 主题配置
    'ui.theme': 'ui/themes/qui/theme'
  },

  map: {
    '*': {
      'css': 'libs/requirejs/css'
    }
  }
});

// 框架入口
requirejs(['ui/main', 'index'], function() {

});
