const mix = require('laravel-mix');
require('dotenv').config();
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
    processCssUrls: false
});

if (!mix.inProduction()) {
    mix.webpackConfig({
        devtool: 'source-map'
    })
        .sourceMaps()
}

mix.sass('resources/scss/app.scss', 'public/css')
    .sass('resources/scss/react-app.scss', 'public/css')
    .react('resources/js/react-app/index.jsx', 'public/js/react-app.js')
    .react('resources/js/MovieDetail/index.jsx', 'public/js/movie-detail.js')

    .browserSync({
        host: 'localhost',
        port: 3000,
        proxy: {
            target: process.env.APP_URL
        }
    });

// add versioning (creates mix.manifest.json)
mix.version();