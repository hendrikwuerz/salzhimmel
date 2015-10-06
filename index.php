<?php get_header(); ?>

    <?php get_sidebar(); ?>

    <main>

        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <div class="box layout1">
                <h2><?php the_title(); ?></h2>
                <img src="<?php theme(); ?>img/testbild.jpg" alt="testbild">
                <?php the_content(); ?>
                <p class="publication-date">Veröffentlicht am <time datetime="<?php echo get_the_date('Y-m-d G:i'); ?>"><?php echo get_the_date('j. F Y'); ?></time></p>
            </div>
        <?php endwhile; endif; ?>

    </main><!-- main -->
<?php get_footer(); ?>