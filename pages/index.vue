<template>
  <div>
    <h1 class="page-title">All Recipes</h1>
    <main>
        <div class="recipe" v-for="recipe in recipes" v-bind:key="recipe.id">
          <h3>{{recipe.name}}</h3>
          <ul class="ingredients">
            <h5>Ingredients</h5>
            <li v-for="ingredient in recipe.ingredients" v-bind:key="ingredient.index">
              {{ingredient}}
            </li>
          </ul>
          <ul class="directions">
            <h5>Directions</h5>
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
    axios.get(`${process.env.baseUrl}/api/recipes`)
    .then(res => {
      this.recipes = res.data
      })
    .catch(err => console.log(err))
  },

}
</script>

<style>

.recipe {
  display: grid;
  justify-items: center;

}

.directions {
  text-align: center;

}

.page-title {
  text-align: center;
}
</style>