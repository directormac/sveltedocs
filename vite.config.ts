import { defineConfig, type PluginOption } from 'vite';
import { sveltepress } from '@sveltepress/vite';
import { defaultTheme } from '@sveltepress/theme-default';
import remarkMermaid from 'remark-mermaidjs';
import type { RemarkMermaidOptions } from 'remark-mermaidjs';

const config = defineConfig({
  plugins: [
    sveltepress({
      theme: defaultTheme({
        navbar: [
          {
            title: 'Docs',
            to: '/docs',
          },
          {
            title: 'API',
            to: '/api',
          },
          {
            title: 'Web App',
            to: '/web',
          },
        ],
        sidebar: {
          '/docs': [
            {
              title: 'Home',
              to: '/docs',
            },
            {
              title: 'Project Structure',
              collapsible: true,
              items: [
                {
                  title: 'Guidelines',
                  to: '/docs/project',
                },
                {
                  title: 'Turbo',
                  to: '/docs/turbo',
                },
                {
                  title: 'Apps',
                  to: '/docs/apps',
                },
                {
                  title: 'Packages',
                  to: '/docs/packages',
                },
              ],
            },
          ],
          '/api': [
            {
              title: 'API',
              to: '/api',
            },
            {
              title: 'Project Structure',
              collapsible: true,
              items: [],
            },
          ],
          '/web': [
            {
              title: 'Web',
              to: '/web',
            },
            {
              title: 'Project Structure',
              collapsible: true,
              items: [
                {
                  title: 'Configuration',
                  to: '/web/config',
                },
              ],
            },
            {
              title: 'Requirements',
              collapsible: true,
              items: [
                {
                  title: 'Requirements',
                  to: '/web/requirements',
                },
                {
                  title: 'Home Page',
                  to: '/web/requirements/home',
                },
                {
                  title: 'Login Page',
                  to: '/web/requirements/login',
                },
                {
                  title: 'Register Page',
                  to: '/web/requirements/about',
                },
                {
                  title: 'Register Page',
                  to: '/web/requirements/login',
                },
                {
                  title: 'Dashboard Page',
                  to: '/web/requirements/dashboard',
                },
              ],
            },
          ],
        },
        github: 'https://github.com/directormac/docs',
        logo: '/docs.svg',
        preBuildIconifyIcons: {
          'vscode-icons': ['file-type-svelte', 'file-type-markdown'],
          logos: ['svelte', 'vitejs', 'svelte-icon', 'svelte-kit'],
          noto: ['package'],
        },
      }),
      siteConfig: {
        title: 'Artifex Docs',
        description: 'A docs starter for projects',
      },
      remarkPlugins: [
        [
          remarkMermaid,
          {
            mermaidConfig: {
              theme: 'neutral',
            },
          } as RemarkMermaidOptions,
        ] as any,
      ],
    }),
  ],
});

export default config;
