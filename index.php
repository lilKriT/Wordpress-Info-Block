<?php

/*
    Plugin Name: Quiz Block
    Description: A Gutenberg Block which allows to ask a multiple choice question.
    Version: 1.0
    Author: lilKriT
    Author URI: https://lilkrit.dev
*/

if (!defined("ABSPATH")) exit;

class QuizBlock
{
    function __construct()
    {
        add_action("enqueue_block_editor_assets", array($this, "adminAssets"));
    }

    function adminAssets()
    {
        wp_enqueue_script("quizBlockType", plugin_dir_url(__FILE__) . "test.js", array('wp-blocks'));    // name we came up with, file url, dependencies
    }
}

$quizBlock = new QuizBlock();
