import axios from 'axios'

export const state = () => ({
  recipes: [],
  recipe: {
    id: '',
    name: '',
    ingredients: [],
    directions: []
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
    state.recipe.id = foundRecipe.id
    state.recipe.name = foundRecipe.name
    state.recipe.ingredients = foundRecipe.ingredients
    state.recipe.directions = foundRecipe.directions
  }
}

export const actions = {
  async fetchRecipes ({ commit }) {
    const { data } = await axios.get(`https://fast-reef-73314.herokuapp.com/recipes`)
    commit({
      type: 'setRecipes',
      list: data
    })
  }
}