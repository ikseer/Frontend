/** @type {import('next').NextConfig} */
const nextConfig = {
  defaultLocale: 'en', // Change this to your desired default locale
};
const withNextIntl = require('next-intl/plugin')('./i18n.ts');
module.exports = withNextIntl({
  nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Adjust if your images use HTTPS
        hostname: 'ikseer.azurewebsites.net',
        port: '', // Specify port if required
        pathname: '/media/**', // Update if your image path differs
      },
    ],
  },
});
