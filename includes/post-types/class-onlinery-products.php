<?php

/**
 * Fired during plugin activation
 *
 * @link       https://desgrammer.com
 * @since      0.0.1
 *
 * @package    Onlinery
 * @subpackage Onlinery/includes
 */

class Onlinery_Products {
    public function register_post_type() {
		register_post_type(
			'onl_products',
			array(
				'labels'       => array(
					'name'               => __( 'Products', 'onlinery' ),
					'singular_name'      => __( 'Product', 'onlinery' ),
					'menu_name'          => __( 'Products', 'onlinery' ),
					'all_items'          => __( 'Products', 'onlinery' ),
					'add_new'            => __( 'Add Product', 'onlinery' ),
					'add_new_item'       => __( 'Add Product', 'onlinery' ),
					'edit'               => __( 'Edit Product', 'onlinery' ),
					'edit_item'          => __( 'Edit Product', 'onlinery' ),
					'new_item'           => __( 'New Product', 'onlinery' ),
					'view'               => __( 'Show Product', 'onlinery' ),
					'view_item'          => __( 'Show Product', 'onlinery' ),
					'search_items'       => __( 'Find Product', 'onlinery' ),
					'not_found'          => __( 'Product not found', 'onlinery' ),
				),
				'menu_icon'    => 'dashicons-store',
				'public'       => true,
				'hierarchical' => true,
				'has_archive'  => true,
				'supports'     => array(
					'title',
					'editor',
					'thumbnail',
					'comments',
				),
				'rewrite'      => array(
					'slug'       => 'product',
					'with_front' => true,
				),
				'can_export'   => true,
			)
		);
    }

	/**
	 * Advanced design of edit product
	 *
	 * @return void
	 */
    public function edit_product_screen() {
        $screen = get_current_screen();
        if ( $screen->post_type == 'onl_products' && $screen->action == 'add' ) {
            include_once ONLINERY_PATH . 'admin/pages/onlinery-admin-product-show.php';
            die();
        }
    }
}
