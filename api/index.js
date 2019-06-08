const express = require('express')
const axios = require('axios')
const util = require('util')

const app = express()

app.get('/', (req, res, next) => {
    res.send('API root')
})

app.get('/recipes', async (req, res, next) => {
    const recipeList = await axios.get(
        `https://api.mlab.com/api/1/databases/wfddev/collections/recipes?apiKey=${process.env.MLAB_SECRET}`
    )
    res.send(JSON.stringify(recipeList.data))
})

module.exports = {
    path: '/api',
    handler: app
}