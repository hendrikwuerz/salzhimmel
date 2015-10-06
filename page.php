<?php get_header(); ?>

<?php get_sidebar(); ?>

    <main>

        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <div class="box">
                <h2><?php the_title(); ?></h2>
                <?php the_content(); ?>
                <p class="publication-date">Veröffentlicht am <time datetime="<?php echo get_the_date('Y-m-d G:i'); ?>"><?php echo get_the_date('j. F Y'); ?></time></p>
            </div>
        <?php endwhile; endif; ?>

        <footer class="box no-date">
            Diese Seite wird von Hendrik Würz entwicketl und betrieben. Bitte lesen Sie das <a href="">Impressum</a> für weiter Informationen.
        </footer>

    </main><!-- main -->

<?php get_footer(); ?>