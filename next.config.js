/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    },
    webpack(config) {
        config.experiments = {
          ...config.experiments,
          topLevelAwait: true,
        };
        return config;
      },

}

const withImages = require('next-images')

module.exports = withImages(nextConfig)
module.exports = nextConfig
