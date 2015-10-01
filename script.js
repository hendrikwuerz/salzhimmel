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


$(function() {


    jq.window = $(window);
    jq.html = $('html');
    jq.body = $('body');
    jq.background = $('#background');
    jq.header = $('#header');
    jq.nav = $('nav');
    jq.main = $('main');

    storage.config = {};
    storage.config.paralaxFactor = 3; // 3px scrolling will effect 1üx image movement

    /**
     * initialize site
     */
    function init() {
        // parallax scrolling
        background();

        // swap <main> part on page and do not reload all
        inPageLoading();

        // show animation when mouse is over the logo
        logoAnimation();
    }

    /**
     * enable logo animation
     */
    function logoAnimation() {
        var image = new Image();
        image.src = 'img/logo_animated.gif'; // preloaded image
        jq.header.mouseenter(function() {
            jq.header.find('img').attr('src', 'img/logo_animated.gif');
        });
        jq.header.mouseleave(function() {
            jq.header.find('img').attr('src', 'img/logo.png');
        });
    }

    init();
});
