<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme and one
 * of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query,
 * e.g., it puts together the home page when no home.php file exists.
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */

get_header(); ?>
<section class="hero">
	<div class="row" data-equalizer>
		<div class="small-12 large-8 alpha columns blog-content" data-equalizer-watch>
		<?php
			if ( have_posts() ) :
				// Start the Loop.
				while ( have_posts() ) : the_post();
					echo '<div class="blog-entry">';
					the_title( '<h2><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
					the_excerpt();
					echo '<p><a href="'.esc_url( get_permalink() ).'">Read more...</a></p>';
					echo '</div>';
				endwhile;

			else :
				// If no content, include the "No posts found" template.
				get_template_part( 'content', 'none' );

			endif;
		?>
		</div><!-- #content -->
		<?php get_sidebar(); ?>
	</div><!-- #primary -->
</section><!-- #main-content -->
<?php
get_footer();