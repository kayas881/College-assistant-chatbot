/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.mp4$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
          publicPath: '_next/static/media/',
          outputPath: 'static/media/',
          esModule: config.esModule || false,
        },
      },
    });

    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
};

export default nextConfig;