
require.config({
    baseUrl: "/assets/js",
    
    paths: {
        // Libs
        underscore   : 'vendor/underscore.min',
        Backbone     : 'vendor/backbone.min',
    },
    shim: {
        underscore: {
          exports: '_'
        },
        Backbone: {
          deps: ["underscore", "jquery"],
          exports: "Backbone"
        }
    }
});

require(['jquery'], function($) {

    $(function() {
        
    });
    
});