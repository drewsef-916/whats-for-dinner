import axios from 'axios'

export const state = () => ({
  recipes: [],
  recipe: {
    id: '',
    name: '',
    ingredients: [],
    directions: [],
    lastEaten: '',
    timesEaten: 0
  }
})

export const mutations = {
  setRecipes(state, payload) {
    state.recipes = payload.list
  },
  setRecipe(state, payload) {
    const foundRecipe = state.recipes.find(recipe => {
      return recipe.id === payload.recipeId
    })
    state.recipe._id = foundRecipe._id.$oid
    state.recipe.id = foundRecipe.id
    state.recipe.name = foundRecipe.name
    state.recipe.ingredients = foundRecipe.ingredients
    state.recipe.directions = foundRecipe.directions
    state.recipe.lastEaten = foundRecipe.lastEaten
    state.recipe.timesEaten = foundRecipe.timesEaten
  },
  updateRecipes(state, {updatedRecipe}) {
    const withoutNewRecipe = state.recipes.filter(recipe => {
      return recipe.id !== updatedRecipe.id
    })
    state.recipes = [...withoutNewRecipe, updatedRecipe]
  },
  sortRecipes(state) {
    const sortedRecipes = state.recipes.sort((a,b) => {
      return new Date(a.lastEaten) - new Date(b.lastEaten)
    })
    state.recipes = sortedRecipes
  },
}

export const actions = {
  async fetchRecipes ({ commit }) {
    const { data } = await axios.get(`https://fast-reef-73314.herokuapp.com/recipes`)
    commit({
      type: 'setRecipes',
      list: data
    })
  },
  async updateLastEaten ({ commit }, payload) {
    console.log(payload.recipe)
    try {
      const res = await axios.put(`https://fast-reef-73314.herokuapp.com/recipe`, {
        mlabId: payload.recipe._id,
        reqTimesEaten: payload.recipe.timesEaten
      })
      commit({
        type: 'updateRecipes',
        updatedRecipe: res
      })
    } catch (err) {
      console.error(err)
    }
  }
}