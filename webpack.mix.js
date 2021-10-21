const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.js('resources/js/front.js', 'public/js/front.js')
    .sass('resources/sass/front.scss', 'public/css/front.css')
    .sass('resources/sass/sb-admin.scss', 'public/css/sb-admin.css')
    .version()
    .options({
        processCssUrls: false
    })
    .browserSync('carrosusados:8888'); // Use wamp/xamp local proxy
