// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jun Wang Docs Site',
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
  onBrokenMarkdownLinks: 'warn',

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
          alt: 'Jun Documentation | Jun Docs',
          height: '40px',
          width: '101px',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'workSidebar',
            position: 'left',
            label: 'Work & Career',
          },
          {
            type: 'docSidebar',
            sidebarId: 'personalSidebar',
            position: 'left',
            label: 'Personal',
          },
          {
            type: 'docSidebar',
            sidebarId: 'financeSidebar',
            position: 'left',
            label: 'Finance',
          },
          {
            type: 'docSidebar',
            sidebarId: 'propertySidebar',
            position: 'left',
            label: 'Property',
          },
          {
            type: 'docSidebar',
            sidebarId: 'familySidebar',
            position: 'left',
            label: 'Family',
          },
          {
            type: 'docSidebar',
            sidebarId: 'legalSidebar',
            position: 'left',
            label: 'Legal',
          },
          {
            type: 'docSidebar',
            sidebarId: 'referenceSidebar',
            position: 'left',
            label: 'Reference & Knowledge',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
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
