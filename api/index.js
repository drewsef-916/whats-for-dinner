const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const axios = require('axios')
const recipeList = require('../masterRecipeList.json')

const app = express()

const jsonParser = bodyParser.json()

// let rawData = fs.readFile('~/masterRecipeList.json')
// let recipeList = JSON.parse(rawData)

app.get('/', (req, res, next) => {
  console.log(recipeList)
  res.send('API root')
})

app.post('/addRecipe', jsonParser, (req, res, next) => {
  const newRecipe = JSON.stringify(req.body);
  recipeList.push(newRecipe)
  res.send(req.body);
})

module.exports = {
  path: '/api',
  handler: app
}