/**
 * Created by hendrik on 01.10.15.
 */


function inPageLoading() {

    function init() {
        jq.nav.find('a').click(function (evt) {
            setProgress(20);
            evt.preventDefault();
            $(evt.target).blur(); // no ugly dotted line around the link
            var url = $(evt.target).closest("a").attr('href');
            console.log("Zielseite: " + url);

            history.pushState({}, '', url);
            setProgress(70);
            loadPage(url);

            console.log("end");

            return false;
        });
    }

    /**
     * "Back-Button" handler
     */
    $(window).on("popstate", function() {
        loadPage(location.href); // change content with ajax
    });

    /**
     * loads a new page in the <main> of this page
     * for ajax page loading see https://rosspenman.com/pushstate-jquery/
     * @param href
     *          The url of the new page
     */
    function loadPage(href) {
        jq.main.load(href + " main>*", ajaxLoad);
    }

    /**
     * should be called after page content is changed from ajax call
     * layout page again
     * @param html
     *          The new page which is now displayed
     */
    function ajaxLoad(html) {
        setProgress(100);
        document.title = html
            .match(/<title>(.*?)<\/title>/)[1]
            .trim();
        recalculateBackground();
        setProgress(0);
    }

    init();
}
