<!--
<h2>Suche</h2>
<p>
<form method="get" id="searchform" action="<?php echo $_SERVER['PHP_SELF']; ?>">
   <input type="text" value="<?php echo wp_specialchars($s, 1); ?>" name="s" id="s" />
   <input type="submit" id="search_submit" value="Suchen" />
</form>
</p>
 
<h2>&Uuml;ber diesen Blog</h2>
<p class="mini_about">
   Hallo, mein Name ist Christian und du siehst hier das Tutorial Template aus dem <a href="http://wordpress.lernenhoch2.de/handbuch/">Wordpress Template Tutorial</a> auf <a href="http://lernenhoch2.de/">Lernen²</a>
</p>
 
<h2>Kategorien</h2>
<ul>
   <?php wp_list_categories('orderby=name&order=ASC&title_li='); ?>
</ul>
 
<h2>Archiv</h2>
<ul>
   <?php wp_get_archives('type=monthly'); ?>
</ul>

<h2>Seiten</h2>
<ul>
   <?php wp_list_pages(); ?>
</ul>
 
<h2>Blogroll</h2>
<ul>
   <?php wp_list_bookmarks(); ?>
</ul>
-->

<h2>Menü</h2>
   <?php wp_nav_menu( array( 'theme_location' => 'main-menu', /**/
       'container_class' => 'main-menu-container',
       'container' => 'nav',
       'menu_id' => 'main-menu',
       'menu_class' => '' ) ); ?>
