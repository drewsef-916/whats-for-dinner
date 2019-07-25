const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const axios = require('axios')

const app = express()

const jsonParser = bodyParser.json()

app.get('/', (req, res, next) => {
  console.log(recipeList)
  res.send('API root')
})

app.get('/recipes', async (req, res, next) => {
  try {
    const recipes = await axios.get(`https://api.mlab.com/api/1/databases/wfddev/collections/recipes?apiKey=${process.env.MLAB_SECRET}`)
    res.send(JSON.stringify(recipes.data));
  } catch(error) {
    console.log(error)
  }
  res.send('API root')
})

app.post('/addRecipe', jsonParser, async (req, res, next) => {
  try {
    await axios.post(`https://api.mlab.com/api/1/databases/wfddev/collections/recipes?apiKey=${process.env.MLAB_SECRET}`, {
      id: req.body.id,
      name: req.body.name, 
      ingredients: req.body.ingredients,
      directions: req.body.directions
    })
    res.send('Success!')
  } catch(error) {
    console.log(error)
  }
})

module.exports = {
  path: '/api',
  handler: app
}