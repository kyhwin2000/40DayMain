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
        
        echo '<section class="blog ming"><div class="row"><div class="small-12 columns">';
        the_title( '<h2 class="blog-title">', '</h2>' );
        echo '</div>';
        echo '<div class="small-12 large-8 columns end blog-content data-equalizer-watch">';
        the_content();
          ?>
    
          <?php
          echo '</div>';
          
        endwhile;
      ?>
<?php
get_sidebar();
echo '</div></section>';
get_footer();