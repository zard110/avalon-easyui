define(function(require) {
  require('easyui/layout');

  var avalon = require('avalon'),
    $ = require('jquery');

  avalon.component('ms-layout', {
    template: '<div class="layout"><slot name="content"></slot></div>',

    soleSlot: 'content',

    onInit: function() {
      console.log('onInit', this, arguments);
    },

    onReady: function() {
      console.log('onReady', this, arguments);
    },

    onViewChange: function() {
      console.log('onViewChange', this, arguments);
    },

    onDispose: function() {
      console.log('onDispose', this, arguments);
    },
  })
});
