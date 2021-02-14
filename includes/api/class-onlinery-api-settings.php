<?php

class Onlinery_API_Settings {
    public function __construct() {
        $this->load_data();
    }

    private function load_data() {
        require_once ONLINERY_PATH . 'includes/data/currency.php';
        require_once ONLINERY_PATH . 'includes/data/currency-symbols.php';
    }

    public function register_api() {
        register_rest_route( 
            'onlinery/v1',
            '/settings/get_currency',
            array(
                'methods' => 'GET',
                'callback' => array( $this, 'get_currency' ),
            )
        );
        register_rest_route( 
            'onlinery/v1',
            '/settings/get_currency_symbols',
            array(
                'methods' => 'GET',
                'callback' => array( $this, 'get_currency_symbols' ),
            )
        );
    }

    public function get_currency( WP_REST_Request $request ) {
        $currency = onlinery_get_currency();

        $response = array(
            'code'    => 200,
            'data'    => $currency,
            'message' => 'Currency success loaded!'
        );

        return new WP_REST_Response( $response );
    }

    public function get_currency_symbols( WP_REST_Request $request ) {
        $currency_symbols = onlinery_get_currency_symbols();

        $response = array(
            'code'    => 200,
            'data'    => $currency_symbols,
            'message' => 'Currency symbols success loaded!'
        );

        return new WP_REST_Response( $response );
    }
}