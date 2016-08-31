<?php get_header(); ?>

	<h1><?php the_title(); ?></h1>

	<?php if ( have_posts() ): while ( have_posts() ) : the_post(); ?>

		<!-- content -->
		<?php the_content(); ?>
		<!-- /content -->

	<?php endwhile; ?>

	<?php else: ?>

		<h1>Nenhum post encontrado</h1>

	<?php endif; ?>

<?php get_footer(); ?>
