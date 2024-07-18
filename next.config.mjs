/** @type {import('next').NextConfig} */
const nextConfig = {
  configureWebpack: {
    resolve: {
      mainFields: ['main', 'browser'],
    },
  },
};

export default nextConfig;
