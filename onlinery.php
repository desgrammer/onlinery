<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://desgrammer.com
 * @since             0.0.1
 * @package           Onlinery
 *
 * @wordpress-plugin
 * Plugin Name:       Onlinery
 * Plugin URI:        https://onlinery.id
 * Description:       The most versatile online store plugin.
 * Version:           0.0.1
 * Author:            DesGrammer
 * Author URI:        https://desgrammer.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       onlinery
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 0.0.1 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'ONLINERY_VERSION', '0.0.1' );
define( 'ONLINERY_FILE', __FILE__ );
define( 'ONLINERY_PATH', plugin_dir_path( __FILE__ ) );
define( 'ONLINERY_URL', plugin_dir_url( __FILE__ ) );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-onlinery-activator.php
 */
function activate_onlinery() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-onlinery-activator.php';
	Onlinery_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-onlinery-deactivator.php
 */
function deactivate_onlinery() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-onlinery-deactivator.php';
	Onlinery_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_onlinery' );
register_deactivation_hook( __FILE__, 'deactivate_onlinery' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-onlinery.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    0.0.1
 */
function run_onlinery() {

	$plugin = new Onlinery();
	$plugin->run();

}
run_onlinery();
