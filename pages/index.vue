<template>
  <div class="page-wrapper">
    <!-- <h1 class="page-title">All Recipes</h1> -->
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
          <!-- <p>{{recipe.ingredients}}</p>
          <p>{{recipe.directions}}</p> -->
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
  created: function() {
    this.$axios.get(`/api/recipes`)
    .then(res => {
      this.recipes = res.data
      })
    .catch(err => console.log(err))
  },

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
  border: 2px solid black;
  border-radius: 10px;
  background: white;
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