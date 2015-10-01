/**
 * Created by hendrik on 01.10.15.
 */

var refreshBackground;

function background() {

    storage.background = {};
    storage.background.paralaxFactor = 3; // 3px scrolling will effect 1üx image movement
    storage.background.width = 0;
    storage.background.height = 0;
    storage.background.ratio = 0;

    /**
     * initialize the background parallax scrolling
     */
    function init() {
        setListener();
        preloadImage();
    }

    /**
     * register needed listener
     */
    function setListener() {
        // enable parallax scrolling
        jq.window.scroll(refreshBackground);
        jq.window.resize(refreshBackground);
    }

    /**
     * preloads the background image
     * set the image sizes to the storage
     */
    function preloadImage() {
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

    /**
     * updates the position of the background image
     */
    refreshBackground = function() {
        var body = {width: jq.body.width(), height: jq.body.height()};
        var neededHeight = body.height / storage.config.paralaxFactor + body.height;
        var windowRatio = body.width / neededHeight;

        if(windowRatio > storage.background.ratio) { // use full width; height will overflow
            jq.background.css('background-size', '100% auto');
        } else { // use full height; width will overflow
            jq.background.css('background-size', 'auto ' + neededHeight + 'px');
        }

        jq.background.css('margin-top', '-' + (jq.window.scrollTop() / storage.config.paralaxFactor)+ "px");
    };

    init();
}