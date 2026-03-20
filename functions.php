<?php
function norbert_academy_theme_setup() {
    add_theme_support( 'custom-logo', [
        'height'      => 60,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    ]);

    register_nav_menus(
        [
            'primary' => __( 'Primary Menu', 'academy-v2' ),
            'footer'  => __( 'Footer Menu', 'academy-v2' ),
        ]
    );
}

add_action( 'after_setup_theme', 'norbert_academy_theme_setup' );

function norbert_academy_theme_enqueue_styles() {        
    // Custom fonts
    wp_enqueue_style( 'norbert_academy_theme_font_css', get_template_directory_uri() . '/fonts/fonts.css', array(), '2.0' );
    wp_enqueue_style( 'norbert_academy_theme_custom_css', get_template_directory_uri() . '/styles/custom.css', array(), '2.0' );
}

add_action( 'wp_enqueue_scripts', 'norbert_academy_theme_enqueue_styles' );

function norbert_academy_hero_section() {
    ob_start();
    ?>
        <div class="na-hero-section">

        </div>
    <?
    return ob_get_clean();
}

add_shortcode( "hero_section", "norbert_academy_hero_section" );

function norbert_academy_enqueue_icons() {
    // Bootstrap Icons CDN
    wp_enqueue_style(
        'bootstrap-icons',
        'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css',
        array(),
        '1.11.3'
    );
}

add_action('wp_enqueue_scripts', 'norbert_academy_enqueue_icons');

function theme_scripts(){
    wp_enqueue_script( 'main-js', get_template_directory_uri() . '/js/main.js', array(), '1.0', true );
}

add_action( 'wp_enqueue_scripts', 'theme_scripts' );

function norbert_academy_register_hero_block() {
    wp_register_script(
        'na-hero-block',
        get_template_directory_uri() . '/blocks/hero-block.js',
        [ 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' ],
        filemtime( get_template_directory() . '/blocks/hero-block.js' )
    );

    register_block_type( 'norbert-academy/hero', [
        'editor_script' => 'na-hero-block',
    ] );
}
add_action( 'init', 'norbert_academy_register_hero_block' );

function na_allow_svg_uploads($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'na_allow_svg_uploads');