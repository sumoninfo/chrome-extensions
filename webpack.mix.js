let mix    = require('laravel-mix')
const {js} = require("laravel-mix");
mix.setPublicPath('./')
    .sass('assets/scss/popup.scss', 'dist/css')
    .js('assets/js/background.js', 'dist/js')
    .options({
        processCssUrls: false
    })
