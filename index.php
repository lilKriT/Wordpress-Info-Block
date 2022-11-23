<?php

/*
    Plugin Name: Basic Block
    Description: A Gutenberg Block which allows to set up some data and show it on the front-end.
    Version: 1.0
    Author: lilKriT
    Author URI: https://lilkrit.dev
*/

if (!defined("ABSPATH")) exit;

class InfoBlock
{
    function __construct()
    {
        // enqueue was the old way. with php, use init
        // add_action("enqueue_block_editor_assets", array($this, "adminAssets"));
        add_action("init", array($this, "adminAssets"));
    }

    function adminAssets()
    {
        // name we came up with, file url, dependencies
        // wp_enqueue_script("quizBlockType", plugin_dir_url(__FILE__) . "build/index.js", array('wp-blocks', "wp-element")); // wp-element isn't really necessary to specify
        // Also, that's the old way with js

        // New php way
        wp_register_script("infoBlockType", plugin_dir_url(__FILE__) . "build/index.js", array('wp-blocks', "wp-element"));
        // namespace and block name, array of options
        register_block_type("infoplugin/infoblock", array(
            "editor_script" => "infoBlockType",
            "render_callback" => array($this, "blockHTML")
        ));
    }

    function blockHTML($attributes)
    {
        // You can use esc_html here
        // return "<p>Today the sky is " . $attributes["skyColor"] . " and the grass is " . $attributes["grassColor"] . "?</p>";

        // Better way to do this
        ob_start(); ?>
        <p>Today the sky is <?php echo esc_html($attributes["skyColor"]) ?> and the grass is <?php echo esc_html($attributes["grassColor"]) ?>!?</p>
<?php return ob_get_clean();
    }
}

$infoBlock = new InfoBlock();
