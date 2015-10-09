<?php // register mobile browser
include_once('mobile_detect.php');
if(!isset($mobile_detect)) $mobile_detect = new mobile_detect;
$mobile = $mobile_detect->isMobile();
?>

<!DOCTYPE html>

<html lang="<?php bloginfo('language'); ?>" class="<?php echo ($mobile ? 'mobile' : 'no-mobile'); ?>">

<head>
    <meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />

    <?php if($mobile) {
        echo '<meta name="viewport" content="width=940;" />';
    } ?>

    <title><?php wp_title(' - ', true, 'right'); ?> <?php bloginfo('name'); ?></title>

    <!--<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" /> -->

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.8.0/styles/default.min.css">
    <script src="http://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.8.0/highlight.min.js"></script>

    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />

    <script type="text/javascript">
        var theme = "<?php theme(); ?>";
    </script>
    <script type="text/javascript" src="<?php theme(); ?>js/layout.js"></script>
    <script type="text/javascript" src="<?php theme(); ?>js/background.js"></script>
    <script type="text/javascript" src="<?php theme(); ?>js/in_page_loading.js"></script>
    <script type="text/javascript" src="<?php theme(); ?>js/script.js"></script>

    <?php //wp_head(); ?>

</head>
<body>

<div id="background"></div>

<div id="status-bar">
    <div class="progress">&nbsp;</div>
    <span class="login-status">Angemeldet als Hendrik</span>
</div>

<div id="page-wrapper">

    <header id="header">
        <img src="<?php theme(); ?>img/logo.png" class="logo">
        <h3><?php bloginfo('name'); ?></h3>
        <img src="<?php theme(); ?>img/hamburger.svg" class="menu">
    </header>

    <div class="wrapper">