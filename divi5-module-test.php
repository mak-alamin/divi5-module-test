<?php
/*
Plugin Name: Divi5 Simple Test Module (Test Task)
Plugin URI:
Description: Plugin for creating a simple Divi 5 Module.
Version:     1.0.0
Author:     Mak Alamin
Author URI:  https://makalamin.com
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
*/

if ( ! defined( 'ABSPATH' ) ) {
  die( 'Direct access forbidden.' );
}

// Setup constants.
define( 'D5_TUTORIAL_SIMPLE_TEST_MODULE_PATH', plugin_dir_path( __FILE__ ) );
define( 'D5_TUTORIAL_SIMPLE_TEST_MODULE_URL', plugin_dir_url( __FILE__ ) );

// Load Divi 5 modules.
require_once D5_TUTORIAL_SIMPLE_TEST_MODULE_PATH . 'server/index.php';

/**
 * Enqueue Divi 5 Visual Builder Assets
 */
function divi5_simple_test_module_enqueue_visual_builder_assets() {
  if ( et_core_is_fb_enabled() && et_builder_d5_enabled() ) {
    wp_enqueue_script(
      'divi5-simple-quick-module-visual-builder',
      D5_TUTORIAL_SIMPLE_TEST_MODULE_URL . 'visual-builder/build/divi5-simple-test-module.js',
      [
        'react',
        'jquery',
        'divi-module-library',
        'wp-hooks',
        'divi-rest',
      ],
      '1.0.0',
      true
    );
  }
}

add_action( 'divi_visual_builder_assets_before_enqueue_packages', 'divi5_simple_test_module_enqueue_visual_builder_assets' );