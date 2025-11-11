/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const siteUrl = "https://shreesat-sahu.vercel.app";
module.exports = {
  trailingSlash: true,
  env: { SITE_URL: siteUrl },
  async rewrites() {
    return [
      { source: "/sitemap.xml", destination: "/api/sitemap" },
      { source: "/sitemap-index.xml", destination: "/api/sitemap-index" },
    ];
  },
};

module.exports = nextConfig;
