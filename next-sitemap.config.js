module.exports = {
  // add envoirnment variable in .env file and add your website URL

  siteUrl: process.env.SITE_URL || "https://shreesat-sahu.vercel.app",
  generateRobotsTxt: false,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
