/**
 * Created by hendrik on 06.10.15.
 */

var refreshLayout;

function layout() {

    jq.homeNav = jq.nav.find('li.home span');

    storage.layout = {};
    storage.layout.isMobile = false; // true if a mobile browser shows this page

    /**
     * initialize the layout
     */
    function init() {
        setListener();
        refreshLayout();
    }

    /**
     * register needed listener
     */
    function setListener() {
        jq.window.resize(refreshLayout);
    }

    refreshLayout = function() {
        var width = jq.body.width();

        storage.layout.isMobile = width < 1920 && jq.html.hasClass('mobile');

        // minimized header
        if(width < 580 || storage.layout.isMobile) {
            jq.html.addClass('minimized-header')
        } else {
            jq.html.removeClass('minimized-header')
        }

        // minimized navigation
        if(width < 780 || storage.layout.isMobile) {
            jq.html.addClass('minimized-navigation')
        } else {
            jq.html.removeClass('minimized-navigation')
        }

        // smaller navigation
        if(width < 980 && !storage.layout.isMobile) {
            jq.html.addClass('smaller-navigation')
        } else {
            jq.html.removeClass('smaller-navigation')
        }

        // no navigation
        if(storage.layout.isMobile) {
            jq.html.addClass('no-navigation');
        } else {
            jq.html.removeClass('no-navigation');
        }

    };

    init();
}