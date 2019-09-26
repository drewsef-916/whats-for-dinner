import axios from 'axios'

export const state = () => ({
  recipes: []
})

export const mutations = {
  setRecipes(state, payload) {
    state.recipes = payload.list
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