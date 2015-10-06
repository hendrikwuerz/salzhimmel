<!DOCTYPE html>

<html lang="<?php bloginfo('language'); ?>">

<head>
    <meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />

    <title><?php wp_title(' - ', true, 'right'); ?> <?php bloginfo('name'); ?></title>

    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />
    <!--<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" /> -->

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script type="text/javascript">
        var theme = "<?php theme(); ?>";
    </script>
    <script type="text/javascript" src="<?php theme(); ?>js/background.js"></script>
    <script type="text/javascript" src="<?php theme(); ?>js/in_page_loading.js"></script>
    <script type="text/javascript" src="<?php theme(); ?>js/script.js"></script>


    <?php //wp_head(); ?>

</head>
<body>

<div id="background"></div>

<div id="page-wrapper">

    <header id="header">
        <img src="<?php theme(); ?>img/logo.png">
        <h3><?php bloginfo('name'); ?></h3>
    </header>

    <div class="wrapper">