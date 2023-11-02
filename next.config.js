/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    },
    webpack(config) {
        config.experiments = {
          ...config.experiments,
          topLevelAwait: true,
        };
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
      },

}

module.exports = nextConfig
