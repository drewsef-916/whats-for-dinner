<template>
    <div class="page-wrapper">
      <main class="recipe-container">
        <div class="recipe">
          <h3>{{recipe.name}}</h3>
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
            <li v-for="(direction, index) in recipe.directions" v-bind:key="direction.index" @click="crossItOut(index)">
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
  methods: {
    crossItOut: function(index) {
      const direction = this.$el.firstChild.firstChild.lastChild.children[index + 2];
      direction.style.textDecoration === "line-through" ? 
      direction.style.textDecoration = "none" :
      direction.style.textDecoration = "line-through";
    }
  }

}
</script>

<style>
  h1:only-of-type {
    margin-top: 0;
    padding-top: 20px;
  }
  hr {
    width: 10rem;
  }
  li {
    padding: 10px 0;
  }
  .page-wrapper {
    background: url(../../assets/bg.png);
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
