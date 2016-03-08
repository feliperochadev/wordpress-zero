<?php

/* Habilita as thumbs */
add_theme_support( 'post-thumbails' );

/**
 * Sidebars
 *
 */
function arphabet_widgets_init() {

	register_sidebar( array(
		'name'          => 'Home right sidebar',
		'id'            => 'home_right_1',
		'before_widget' => '<div>',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="rounded">',
		'after_title'   => '</h2>',
	) );

}
add_action( 'widgets_init', 'arphabet_widgets_init' );

/*
 * Remove &nbsp;
*/
function remove_empty_lines( $content ){
    // replace empty lines
    $content = preg_replace("/&nbsp;/", "", $content);
    return $content;
}
add_action('content_save_pre', 'remove_empty_lines');

?>
