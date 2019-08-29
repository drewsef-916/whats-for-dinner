const pkg = require('./package');
const axios = require('axios');
require('dotenv').config();

module.exports = {

  env: {
    // baseUrl: process.env.API_URL || 'http://localhost:3000',
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
    // baseURL: prod ? 'https://whats-for-dinner.netlify.com' : 'http://localhost:3000'
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
    routes: function (callback) {
      axios.get(`https://whats-for-dinner.netlify.com/.netlify/functions-build/allRecipes`)
      .then((res) => {
        console.log(res);
        return res.map(recipe => {
          console.log(recipe)
          return {
            route: '/recipes/' + recipe.id,
            payload: recipe
          }
        })
      })
      .catch(e => {console.log(e)})
    }
  }
  // serverMiddleware: [
  //   {path: '/api', handler: '~/api/index.js'}
  // ]
}
