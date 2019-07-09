<template>
    <div class="page-wrapper">
      <main class="recipe-container">
        <div class="recipe">
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
        recipe: {}
    }
  },
  created: function() {
    this.$axios.get(`/api/recipes`)
    .then(res => {
      this.recipe = res.data.find(recipe => recipe.id === this.$route.params.id)
    })
    .catch(err => console.log(err))
  },

}
</script>

<style>
  .page-wrapper {
    background: url(../../assets/bg.png);
    background-attachment: fixed;
    min-height: 85vh;
  }

  h1:only-of-type {
    margin-top: 0;
    padding-top: 20px;
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
