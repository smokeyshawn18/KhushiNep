// next.config.js
const isTurbopack = process.argv.includes("--turbo");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// Only webpack when NOT using Turbopack
if (!isTurbopack) {
  nextConfig.webpack = (config) => {
    // Your webpack rules here (e.g., SVG loader)
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  };
} else {
  // Turbopack config (experimental)
  nextConfig.experimental = {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  };
}

module.exports = nextConfig;
