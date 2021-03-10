<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php do_action( 'wp_head' ) ?>
    <style>
        #wpadminbar { display: none; }
        html { margin-top: 0 !important; }
    </style>
</head>
<body>
<div id="onlineryProducts"></div>
<script src="<?php echo ONLINERY_URL . 'dist/js/product.min.js' ?>" defer></script>
<?php do_action( 'admin_enqueue_scripts' ) ?>
<?php do_action( 'wp_footer' ) ?>
</body>
</html>