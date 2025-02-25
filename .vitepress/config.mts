import { defineConfig } from 'vitepress'
import { getItems } from './sidebar.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,

  sitemap: {
    hostname: 'https://blog.woostore.top'
  },

  title: "woostore.top",
  description: "woostore.top blogs",
  head: [
    [
      'link',
      { rel: 'icon', href: '/budgie.webp' }
    ],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-N3S0CGYC2B' },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-N3S0CGYC2B');`
    ],
    [
      'meta',
      { name: 'google-site-verification', content: 'EYRs0kifVXsKH4EgY-d2lfpEA_ngRYOGt9KdAyeNliE' },
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/budgie.webp',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blogs', link: '/year-of-the-snake-in-china' }
    ],

    sidebar: [
      {
        text: 'Title',
        items: getItems(),
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CtrlShiftAlt' }
    ],

    footer: {
      message: 'Released under the MTI License.',
      copyright: 'Copyright © Since 2025 woostore.top All Rights Reserved.'
    }
  }
})
