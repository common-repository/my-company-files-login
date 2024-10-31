<?php
function mcf_login_form_block_init()
{
    $dir = dirname(__FILE__);

    $block_js = 'block.js';

    wp_register_script(
        'mcf-login-form-block-editor',
        plugins_url($block_js, __FILE__),
        array(
            'wp-blocks',
            'wp-i18n',
            'wp-element',
        ),
        filemtime("$dir/$block_js")
    );

    register_block_type('my-company-files/mcf-login-form', array(
        'editor_script' => 'mcf-login-form-block-editor',
    ));
}
add_action('init', 'mcf_login_form_block_init');
