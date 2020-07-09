const path = require('path')
const withSass = require('@zeit/next-sass')
const withFonts = require('nextjs-fonts');
module.exports = withSass(withFonts({
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, './'),
    }
    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}))