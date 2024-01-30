/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other config options
  defaultLocale: 'en', // Change this to your desired default locale
};
const withNextIntl = require('next-intl/plugin')('./i18n.ts');
module.exports = withNextIntl({ nextConfig });
