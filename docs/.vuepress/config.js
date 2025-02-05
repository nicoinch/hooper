module.exports = {
  title: 'Hooper',
  description: 'Vue.js carousel component',
  base: '/hooper/',
  serviceWorker: true,
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'theme-color', content: '#41b883' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { property: 'og:image', content: '/hooper/hooper.png' }],
    ['script', { src: 'https://polyfill.io/v3/polyfill.min.js', crossorigin: 'anonymous' }]
  ],
  themeConfig: {
    repo: 'baianat/hooper',
    docsRepo: 'baianat/hooper',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Help us improve this page!',
        navbar: [
          { text: 'API', link: '/api.html' },
          { text: 'Examples', link: '/examples.html' }
        ],
        sidebar: [
          { text: 'Getting started', link: '/getting-started.html' },
          { text: 'Examples', link: '/examples.html' },
          { text: 'API', link: '/api.html' }
        ]
      }
    }
  }
};
