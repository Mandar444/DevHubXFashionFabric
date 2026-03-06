/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://fashionfabric.info',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/admin/*', '/api/*'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://fashionfabric.info/my-custom-sitemap-1.xml',
    ],
  },
}
