/**
 * Created by hendrik on 01.10.15.
 */

var recalculateBackground;
var refreshBackground;

function background() {

    storage.background = {};
    storage.background.paralaxFactor = 3; // 3px scrolling will effect 1üx image movement
    storage.background.width = 0;
    storage.background.height = 0;
    storage.background.ratio = 0;
    storage.background.currentPos = 0;

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
        jq.window.resize(recalculateBackground);
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

                recalculateBackground(); // layout background
                jq.html.addClass('background'); // display image
            });
            image.src = image_url;
        }
    }

    /**
     * recalculates needed data for basic layout of the background
     */
    recalculateBackground = function() {

        var body = {width: jq.body.width(), height: jq.body.height()};
        var neededHeight = body.height / storage.config.paralaxFactor + body.height;
        var windowRatio = body.width / neededHeight;

        if(windowRatio > storage.background.ratio) { // use full width; height will overflow
            jq.background.css('background-size', '100% auto');
        } else { // use full height; width will overflow
            jq.background.css('background-size', 'auto ' + neededHeight + 'px');
        }

        // update the position after changes
        refreshBackground();

    };

    /**
     * updates the position of the background image
     */
    refreshBackground = function() {

        if(storage.layout.isMobile) return; // on mobile layout you can not see any background

        var pos = parseInt(jq.window.scrollTop() / storage.config.paralaxFactor);

        if(pos == storage.background.currentPos) return; // do not touch css if nothing is changed

        jq.background.css('margin-top', '-' + pos + 'px');
    };

    init();
}