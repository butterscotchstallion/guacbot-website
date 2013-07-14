
require.config({
    baseUrl: "/assets/js/",
    
    //urlArgs: "bust=" + (new Date()).getTime(),
    
    paths: {
        // Libs
        underscore: 'vendor/underscore.min',
        Backbone  : 'vendor/backbone.min',
        pjax      : 'vendor/pjax',
        jquery    : 'vendor/jquery-1.9.1.min',
        modernizr : 'vendor/modernizr-2.6.2.min'
    },
    shim: {
        pjax: ['jquery'],
        underscore: {
          exports: '_'
        },
        Backbone: {
          deps: ["underscore", "jquery"],
          exports: "Backbone"
        }
    }
});

require(['jquery', 'pjax'], function($, pjax) {

    $(function() {
        $('.container').height($(window).height());
        
        $(window).on('resize', function () {
            $('.container').height($(window).height());
        });
        
        
        var pageContent = $('.page-content');
        
        
        $(document).pjax('a', pageContent);
        
        $(document).on('pjax:send', function() {
            $('#loading').show();
        });
        
        $(document).on('pjax:complete', function() {
            $('#loading').hide();
        });
        
        /*
        pageContent.bind('pjax:start', function(){
            pageContent.fadeOut(250);
        }).bind('pjax:end', function () {
            pageContent.fadeIn(250);
        });
        */
    });
    
});