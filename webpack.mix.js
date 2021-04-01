let mix = require('laravel-mix');

require('mix-tailwindcss');

mix.js('admin/js/onlinery-admin-products.js', 'dist/admin/products/js')
    .postCss('admin/css/onlinery-admin-products.css', 'dist/admin/products/css')
    .tailwind();

mix.options({
    postCss: [require('postcss-custom-properties')]
});