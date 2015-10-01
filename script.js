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
    jq.header = $('#header');
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
        jq.nav.find('a').click(function(evt) {
            evt.preventDefault();
            $(evt.target).blur(); // no ugly dotted line around the link
            var url = $(evt.target).attr('href');
            console.log("Zielseite: " + url);

            $.get('stereoscopy.tpl.html').done(function(data) {
                displayNewPage( {pageTitle: 'Neue Seite', html: data}, url);
            }).error(function (jqXHR, textStatus, error) {
                console.log("boeser fehler ");
                console.log(jqXHR);
                console.log(textStatus);
                console.log(error);
            });

            console.log("end");
            return false;
        });

        /*
        set storage values
        -> size for background image
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

        /*
        enable logo animation
         */
        image = new Image();
        image.src = 'img/logo_animated.gif'; // preloaded image
        jq.header.mouseenter(function() {
            jq.header.find('img').attr('src', 'img/logo_animated.gif');
        });
        jq.header.mouseleave(function() {
            jq.header.find('img').attr('src', 'img/logo.png');
        });
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
        // paralax scrolling for background
        refreshBackground();
    }

    /**
     * when a new page is loaded by ajax this will be called to update the
     * displayed url and change the content
     *
     * @param response
     *          The response of the ajax call - content of the new page
     * @param urlPath
     *          The new url
     */
    function displayNewPage(response, urlPath){
        document.getElementById("content").innerHTML = response.html;
        document.title = response.pageTitle;
        window.history.pushState({"html":response.html,"pageTitle":response.pageTitle},"", urlPath);
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
