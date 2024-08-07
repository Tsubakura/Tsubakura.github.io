
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const organizationName = 'Tsubakura';
const projectName = 'Tsubakura.github.io';

/** @type {import('@docusaurus/types').Config} */
const config = {
  deploymentBranch: 'gh-pages',
  title: 'Kitten ERP Guides',
  tagline: 'Kitten Extreme Raid Progression',
  favicon: 'img/favicon.ico',
  url: 'https://kitten-erp-guides.moe',
  baseUrl: '/',
  organizationName,
  projectName,
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-TS51B6M7GF',
          anonymizeIP: true
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode:{
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false
      },
      image: 'img/kitten.jpg',
      navbar: {
        title: "Kitten's ERP Guides",
        items: [],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
