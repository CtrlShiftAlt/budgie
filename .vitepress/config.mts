import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
  ],
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'budgie.webp',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blogs', link: '/year-of-the-snake-in-china' }
    ],

    sidebar: [
      {
        text: 'Title',
        items: [
          { text: 'Year of the Snake', link: '/year-of-the-snake-in-china' },
          { text: 'Black Friday 2025', link: '/black-friday-2025' },
          { text: 'Embrace the Challenges and Chase Your Dreams', link: '/embrace-the-challenges-and-chase-your-dreams' },
          { text: 'Wired Headphones vs Wireless Headphones', link: '/earphones-wired-vs-wireless' },
        ]
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
