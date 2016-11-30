// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
  baseUrl: '.',
  paths: {
    'avalon': 'libs/avalon/2.2.2/avalon',
    'jquery': 'libs/jquery/3.1.1/jquery',

    'easyui': 'libs/easyui/1.5.0/plugins',
    'easyui.theme': 'libs/easyui/1.5.0/themes/default',

    'theme': 'ui/themes/qui/theme'
  },

  map: {
    '*': {
      'css': 'libs/requirejs/css'
    }
  }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['ui/main', 'index'], function(ui) {
  ui.parse();
});
