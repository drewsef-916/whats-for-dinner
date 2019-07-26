const pkg = require('./package');
import axios from 'axios';
require('dotenv').config();

const prod = process.env.NODE_ENV === 'production'

module.exports = {

  env: {
    // baseURL: (process.env.NODE_ENV === 'production' ? 'https://whats-for-dinner.netlify.com' : 'http://localhost:3000')
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
    baseURL: prod ? process.env.API_URL : 'http://localhost:3000'
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
      if (prod) {
        return axios.get('/recipes')
        .then((res) => {
          return res.data.map((recipe) => {
            return {
              route: '/recipes/' + recipe.id,
              payload: recipe
            }
          })
        })
      } 
      else {
        return axios.get('http://localhost:3000/api/recipes')
        .then((res) => {
          return res.data.map((recipe) => {
            return {
              route: '/recipes/' + recipe.id,
              payload: recipe
            }
          })
        })
      }
    }
  },
  serverMiddleware: [
    {path: '/api', handler: '~/api/index.js'}
  ]
}
