/**
 * Created by hendrik on 06.08.15.
 */


/**
 * some known jquery references
 * most of them are defined in the init methods
 */
var jq = {}; //

/**
 * useful data
 * each sub script can have its own object in it.
 * Example: background.js has its data in "storage.background.myKey"
 * global information are stored at "storage.config.myKey"
 */
var storage = {};

// global access to progress bar
var setProgress;

$(function() {


    jq.window = $(window);
    jq.html = $('html');
    jq.body = $('body');
    jq.background = $('#background');
    jq.statusbar = $('#status-bar');
    jq.progress = jq.statusbar.find('.progress');
    jq.header = $('#header');
    jq.nav = $('nav');
    jq.main = $('main');

    storage.config = {};
    storage.config.paralaxFactor = 3; // 3px scrolling will effect 1üx image movement

    /**
     * initialize site
     */
    function init() {
        // responsive design
        layout();

        // parallax scrolling
        background();

        // swap <main> part on page and do not reload all
        inPageLoading();

        // layout code on the website
        hljs.initHighlightingOnLoad();

        // show animation when mouse is over the logo
        logoAnimation();

        // in mobile mode enable navigation fading
        navigationFading();
    }

    /**
     * enable logo animation
     */
    function logoAnimation() {
        var image = new Image();
        image.src = theme + 'img/logo_animated.gif'; // preloaded image
        jq.header.mouseenter(function() {
            if(storage.layout.isMobile) return; // on mobile layout no mouse is used -> animation is unnecessary
            jq.header.find('img.logo').attr('src', theme + 'img/logo_animated.gif');
        });
        jq.header.mouseleave(function() {
            jq.header.find('img.logo').attr('src', theme + 'img/logo.png');
        });
    }

    /**
     * enables the click listener to open and close navigation in mobile mode
     */
    function navigationFading() {
        jq.header.find('img.menu').click(function(){jq.html.toggleClass('navigation-visible')})
    }

    /**
     * access to the progress bar on the top of every page
     * @param progress
     *          progress between 0 and 100
     */
    setProgress = function(progress) {
        if(progress == 0) jq.progress.css('visibility', 'hidden');
        else jq.progress.css('visibility', 'visible');
        jq.progress.width(progress + '%');
    };

    init();
});
