// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jun Wang Docs',
  tagline: 'Life is short, enjoy while you can',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.junwang.us',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'J&J Tech LLC', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
        },
        blog: {
          blogTitle: 'Jun Wang Blog',
          blogDescription: "Short updates from Jun Wang's personal archive.",
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            copyright: `Copyright © ${new Date().getFullYear()} Jun Wang.`,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/jun-docs-card.png',
      navbar: {
        logo: {
          href: '/',
          src: '/logo/light.svg',
          srcDark: '/logo/dark.svg',
          alt: 'Jun Library',
          height: '44px',
          width: '168px',
        },
        items: [
          { to: '/', label: 'Home', position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'librarySidebar',
            position: 'left',
            label: 'Library',
          },
          {
            type: 'docSidebar',
            sidebarId: 'personalSidebar',
            position: 'left',
            label: 'Personal',
          },
          {
            type: 'docSidebar',
            sidebarId: 'homeSidebar',
            position: 'left',
            label: 'Home & Family',
          },
          {
            type: 'docSidebar',
            sidebarId: 'techSidebar',
            position: 'left',
            label: 'Technology',
          },
          {
            type: 'docSidebar',
            sidebarId: 'careerSidebar',
            position: 'left',
            label: 'Career',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/edenprairie/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Library',
                to: '/docs/intro',
              },
              {
                label: 'Technology',
                to: '/docs/Work%20&%20Career/tim',
              },
              {
                label: 'Personal',
                to: '/docs/Personal/mbti',
              },
            ],
          },
          {
            title: 'Personal',
            items: [
              {
                label: 'Home & Family',
                to: '/docs/Property/home',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/junwang',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/edenprairie/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jun Wang.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
