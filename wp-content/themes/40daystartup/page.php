<?php
/**
 * The Template for displaying all single posts
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */

get_header(); ?>
      <?php
        // Start the Loop.
       while ( have_posts() ) : the_post();
          the_title( '<section class="blog ming"><div class="row"><div class="small-12 columns end"><h2>', '</h2></div>' );
          echo '<div class="small-12 large-8 columns end blog-content data-equalizer-watch">';
          the_content();
          echo '</div>';
        endwhile;
      ?>
<?php
get_sidebar();
echo '</div></section>';
get_footer();