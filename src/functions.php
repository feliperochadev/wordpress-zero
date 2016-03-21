<?php

/* Habilita as thumbs */
add_theme_support( 'post-thumbnails' );

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

/*
 * Remove width e hight quando colocada imagem no post
*/
function remove_width_attribute( $html ) {
   $html = preg_replace( '/(width|height)="\d*"\s/', "", $html );
   return $html;
}
add_filter( 'image_send_to_editor', 'remove_width_attribute', 10 );

/*
 * Tira a imagem de dentro da tag p
*/
function filter_ptags_on_images($content){
   return preg_replace('/<p>\s*(<a .*>)?\s*(<img .* \/>)\s*(<\/a>)?\s*<\/p>/iU', '\1\2\3', $content);
}
add_filter('the_content', 'filter_ptags_on_images');

/*
 * Tira todas as classes das imagens criadas pelo wordpress e coloca uma classe com o nome definido no $class
*/
add_filter( 'get_image_tag_class', '__return_empty_string' );
function add_image_class($class){
    $class .= 'imagem-post';
    return $class;
}
add_filter('get_image_tag_class','add_image_class');

?>
