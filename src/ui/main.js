define(function (require) {
  // Load any app-specific modules
  // with a relative require call,
  // like:


  // Load library/vendor modules using
  // full IDs, like:
  require('easyui/layout');
  require('theme');

  var avalon = require('avalon'),
    parser = require('easyui/parser');

  parser.auto = false;
  parser.onComplete = function() {
    avalon.ready(function() {
      avalon.scan(document.body);
    });
  };

  return parser;
});
