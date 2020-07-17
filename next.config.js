const path = require('path')
const withSass = require('@zeit/next-sass')
const withFonts = require('nextjs-fonts')
const webpack = require('webpack')
module.exports = withSass(
    withFonts({
        webpack: (config) => {
            config.resolve.alias = {
                ...config.resolve.alias,
                '@': path.resolve(__dirname, './'),
            }
            config.plugins.push(
                new webpack.ProvidePlugin({
                    $: 'jquery',
                    jQuery: 'jquery',
                    'window.jQuery': 'jquery',
                }),
            )
            return config
        },
        sassOptions: {
            includePaths: [path.join(__dirname, 'styles')],
        },
    }),
)
