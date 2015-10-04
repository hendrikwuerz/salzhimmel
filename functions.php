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
