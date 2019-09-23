<template>
  <div class="page-wrapper">
    <main class="recipe-container">
        <div class="recipe" v-for="recipe in recipes" v-bind:key="recipe.id">
          <nuxt-link :to="{name: 'recipes-id', params: {id: recipe.id}}">
            <h3>{{recipe.name}}</h3>
          </nuxt-link>

          <ul class="ingredients">
            <h5>Ingredients</h5>
            <hr>
            <li v-for="ingredient in recipe.ingredients" v-bind:key="ingredient.index">
              {{ingredient}}
            </li>
          </ul>
          <ul class="directions">
            <h5>Directions</h5>
            <hr>
            <li v-for="direction in recipe.directions" v-bind:key="direction.index">
              {{direction}}
            </li>
          </ul>
        </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  data: function() {
    return {
      recipes: [],
    }
  },
  methods: {
    // handleScroll() {
    //   if (window.scrollY > 100) {
    //     //make a back to top button
    //   }
    // }
  },
  created: async function() {
    this.$axios.get('https://fast-reef-73314.herokuapp.com/recipes')
    .then(res => {
      this.recipes = res.data
    })
    .catch(err => {
        console.log(err)
    })
  },
  // beforeMount() {
  //   window.addEventListener('scroll', this.handleScroll)
  // },
  // beforeDestroy() {
  //   window.addEventListener('scroll', this.handleScroll)
  // },

}
</script>

<style>

hr {
  width: 10rem;
}

h5 {
  margin-bottom: 5px;
}

.page-wrapper {
  background: url(../assets/bg.png);
  background-attachment: fixed;
}

.recipe-container {
  display: grid;
  justify-content: center;
}

.recipe {
  display: grid;
  justify-items: center;
  width: 80vw;
  margin: 20px 0;
  padding: 12px;
  border: 8px solid transparent;
  border-radius: 10px;
  background:
    linear-gradient(#B7D3F0, #6B90EE) content-box,
    linear-gradient(#c769c2, #211A4D) padding-box,
    linear-gradient(#F1F48C, #8BE5DC) border-box;
}

.directions {
  text-align: center;
  padding: 0;
}

.ingredients {
  text-align: center;
  padding: 0;
}

.page-title {
  text-align: center;
}
</style>