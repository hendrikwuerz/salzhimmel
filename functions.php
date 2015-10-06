<?php

/**
 * this theme will use a sidebar
 */
if ( function_exists('register_sidebar') )
    register_sidebar();

/**
 * This theme is able to display a menu called 'main-menu'
 */
function register_main_menu() {
    register_nav_menus(
        array(
            'main-menu' => __( 'main-menu' )/*,
            'an-extra-menu' => __( 'An Extra Menu' )*/
        )
    );
}
add_action( 'init', 'register_main_menu' );

function render_main_menu() {
    $menu_name = 'main-menu'; // name of rendered menu
    if (($locations = get_nav_menu_locations()) && isset($locations[$menu_name])) {
        $menu = wp_get_nav_menu_object($locations[$menu_name]);
        $menu_items = wp_get_nav_menu_items($menu->term_id);

        $menu_list = "<nav>\n";
        $menu_list .= "\t\t\t\t<ul>\n";
        foreach ((array) $menu_items as $key => $menu_item) { // loop menu entries
            $title = $menu_item->title;
            $classes = implode(" ", $menu_item->classes);
            $url = make_href_root_relative($menu_item->url);
            $menu_list .= "\t\t\t\t\t<li class=\"$classes\"><a href=\"$url\"><span>$title<span></a></li>\n";
        }
        $menu_list .= "\t\t\t\t</ul>\n";
        $menu_list .= "\t\t\t</nav>\n";

    } else { // try to render default menu
        $menu_list = wp_nav_menu( array( 'theme_location' => 'main-menu', /**/
            'container_class' => 'main-menu-container',
            'container' => 'nav',
            'menu_id' => 'main-menu',
            'menu_class' => '',
            'echo' => false ));
        // $menu_list = '<!-- no list defined -->';
    }

    echo $menu_list;
}

/**
 * no admin par should be shown on the live page
 */
add_filter('show_admin_bar', '__return_false');

/**
 * use relative paths
 */
function make_href_root_relative($input) {
    return preg_replace('!http(s)?://' . $_SERVER['SERVER_NAME'] . '(:' . $_SERVER['SERVER_PORT'] . ')?(/)?!', '/', $input);
}
add_filter( 'the_permalink', 'make_href_root_relative' );
add_filter( 'bloginfo_url', 'make_href_root_relative' );

/**
 * get theme directory
 */
function theme() {
    bloginfo('template_url'); echo "/";
}