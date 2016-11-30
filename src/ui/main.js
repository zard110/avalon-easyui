define(function (require) {

  // 主题
  require('ui.theme');

  // 依赖于 avalon 构建 MVVM 框架
  require('avalon');

  // 扩展 easyui 的 parser
  require('core/parser');

  /** 组件 **/
  require('components/layout');

});
