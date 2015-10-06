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

/**
 * no admin par should be shown on the live page
 */
add_filter('show_admin_bar', '__return_false');

/**
 * use relative paths
 */
function make_href_root_relative($input) {
    return preg_replace('!http(s)?://' . $_SERVER['SERVER_NAME'] . '(/)?!', '/', $input);
}
add_filter( 'the_permalink', 'make_href_root_relative' );
add_filter( 'bloginfo_url', 'make_href_root_relative' );

/**
 * get theme directory
 */
function theme() {
    bloginfo('template_url'); echo "/";
}