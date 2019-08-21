const pkg = require('./package');
const axios = require('axios');
require('dotenv').config();

module.exports = {

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },

  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    [
      'nuxt-fontawesome', {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }

    ]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // baseURL: process.env.NODE_ENV === 'production' ? 'https://whats-for-dinner.netlify.com' : 'http://localhost:3000',
    https: true,
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  generate: {
    routes: function () {
      return axios.get(`https://api.mlab.com/api/1/databases/wfddev/collections/recipes?apiKey=${process.env.MLAB_SECRET}`)
      .then((res) => {
        return res.data.map((recipe) => {
          return {
            route: '/recipes/' + recipe.id,
            payload: recipe
          }
        })
      })
      .catch(e => {console.log(e)})
    }
  },
  serverMiddleware: [
    {path: '/api', handler: '~/api/index.js'}
  ]
}
