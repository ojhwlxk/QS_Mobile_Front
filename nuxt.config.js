module.exports = {
  server: {
    host: '0.0.0.0',
    port: '18000'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: '퀸스스마일',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'QueensSmile project' }
    ],
    link: [
      // Font
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@200;300;500;700;900&display=swap' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      { src: 'https://cdn.polyfill.io/v2/polyfill.js?features=Intl.~locale.ko' }, // polyfill for luxon
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.2.5/polyfill.min.js' } // babel-polyfill for vue-datetime
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/scss/app.scss', lang: 'scss' },
    { src: 'swiper/dist/css/swiper.css' }
  ],
  loading: {
    color: '#e95e89',
    height: '4px'
  },
  /*
  ** Environment Variables
  */
  env: {
    ACCESS_TOKEN_NAME: 'qs-access-token',
    REMEMBER_ID_NAME: 'qs-remember-id'
  },
  /*
   ** modules
   */
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '~/assets/scss/style-resource.scss'
    ]
  },
  /*
  ** Add axios globally
  */
  build: {
    vendor: [
      'axios',
      'vee-validate',
      'vue-awesome-swiper'
    ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.node = {
        fs: 'empty'
      }
    }
  },
  plugins: [
    { src: '~/plugins/filters.js' },
    { src: '~/plugins/vee-validate.js' },
    { src: '~/plugins/event-bus.js' },
    { src: '~/plugins/vue-awesome-swiper.js', mode: 'client' },
    { src: '~/plugins/vue-datetime.js', mode: 'client' }
  ],
  router: {
    linkActiveClass: 'active',
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  serverMiddleware: [
    // API middleware
    { path: '/cookie', prefix: false, handler: '~/api/cookie.js' }
  ]
}
