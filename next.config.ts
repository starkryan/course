import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Disable source map generation for node_modules
    config.module.rules.push({
      test: /\.js$/,
      enforce: 'pre',
      use: ['source-map-loader'],
      exclude: [/node_modules/]
    });

    // Ignore source map warnings
    config.ignoreWarnings = [
      /Failed to parse source map/,
      /source-map-loader/
    ];

    return config;
  },
  // Disable source maps in development
  productionBrowserSourceMaps: false,
};

export default nextConfig;
