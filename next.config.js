/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:["elchemydev.s3.amazonaws.com","elchemydev.s3.ap-south-1.amazonaws.com"],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add your custom webpack configuration here
    config.module.rules.push({
      test: /\.my-file$/i,
      loader: "raw-loader",
    });
    // Important: return the modified config
    return config;
  },
}

module.exports = nextConfig
