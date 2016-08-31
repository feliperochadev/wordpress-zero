<?php get_header(); ?>
	<?php if (have_posts()): while (have_posts()) : the_post(); ?>

		<!-- post thumbnail -->
		<?php if ( has_post_thumbnail()) : // Check if Thumbnail exists ?>
			<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
				<?php the_post_thumbnail(); // Fullsize image for the single post ?>
			</a>
		<?php endif; ?>
		<!-- /post thumbnail -->

		<!-- post title -->
		<h1>
			<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a>
		</h1>
		<!-- /post title -->

		<!-- content -->
		<?php the_content(); ?>
		<!-- /content -->

	<?php endwhile; ?>

	<?php else: ?>

		<h1>Nenhum post encontrado</h1>

	<?php endif; ?>
<?php get_footer(); ?>
