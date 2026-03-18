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
}

add_action( 'wp_enqueue_scripts', 'norbert_academy_theme_enqueue_styles' );