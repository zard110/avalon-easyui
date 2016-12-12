/**
 * promise 重写 easyui parser
 */
define(function(require) {
  var easyuiParser = require('easyui/parser'),
    Promise = require('es6.promise').Promise,
    $ = require('jquery');

  easyuiParser.auto = false;

  return function parse(context) {
    context = context || $('body');

    return new Promise(function(resolve, reject) {
      try {
        // 因为 easyui 中的 parser 设置的回调函数是全局。所以在成功回调后要清空
        easyuiParser.onComplete = function(context) {
          easyuiParser.onComplete = $.noop;
          resolve(context);
        };

        easyuiParser.parse(context)
      }
      catch(e) {
        easyuiParser.onComplete = $.noop;
        reject(e);
      }
    });
  }
});
