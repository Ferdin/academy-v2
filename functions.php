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
