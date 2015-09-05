/**
 * Created by hendrik on 06.08.15.
 */

// TODO: DEBUG REMOVE IT
var script;

$(function() {

    var jq = {};
    jq.window = $(window);
    jq.html = $('html');
    jq.body = $('body');
    jq.background = $('#background');
    jq.nav = $('nav');

    var storage = {};
    storage.config = {};
    storage.config.paralaxFactor = 3; // 3px scrolling will effect 1üx image movement
    storage.background = {};
    storage.background.width = 0;
    storage.background.height = 0;
    storage.background.ratio = 0;

    // TODO: DEBUG REMOVE IT
    script = jq;

    /*
    initialize site
     */
    function init() {
        /*
         enable paralax scrolling for background image
         */
        jq.window.scroll(scroll);
        jq.window.resize(resize);

        /*
         enable navigation expanding
         */
        jq.nav.find('> ul > li > a').click(function(evt) {
            evt.preventDefault();
            $(evt.target).parent().toggleClass('expanded');
            //.siblings('ul').fadeToggle();
            return false;
        });

        /*
        set storage values
        -> image size
         */
        var image_url = jq.background.css('background-image');
        var image;

        // Remove url() or in case of Chrome url("")
        image_url = image_url.match(/^url\("?(.+?)"?\)$/);

        if (image_url[1]) {
            image_url = image_url[1];
            image = new Image();

            // just in case it is not already loaded
            $(image).load(function () {
                // store image data for position calculation
                storage.background.width = image.width;
                storage.background.height = image.height;
                storage.background.ratio = image.width / image.height;

                refreshBackground(); // layout background
                jq.html.addClass('background'); // display image
            });
            image.src = image_url;
        }
    }

    /*
    scroll handler
     */
    function scroll() {
        // paralax scrolling for background

        refreshBackground();
    }

    /*
    resize handler
     */
    function resize(event) {
        console.log(event);
        refreshBackground();
    }

    /*
    updates the position of the background image
     */
    function refreshBackground() {
        var body = {width: jq.body.width(), height: jq.body.height()};
        var neededHeight = body.height / storage.config.paralaxFactor + body.height;
        var windowRatio = body.width / neededHeight;

        if(windowRatio > storage.background.ratio) { // use full width; height will overflow
            jq.background.css('background-size', '100% auto');
        } else { // use full height; width will overflow
            jq.background.css('background-size', 'auto ' + neededHeight + 'px');
        }


        jq.background.css('margin-top', '-' + (jq.window.scrollTop() / storage.config.paralaxFactor)+ "px");
    }

    init();
});
