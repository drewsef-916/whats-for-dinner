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

export default {
  computed: {
    recipes() {
      return this.$store.state.recipes
    }
  },
  created() {
    this.$store.dispatch('fetchRecipes')
  }
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
    linear-gradient(#fff, #999) content-box,
    linear-gradient(#f1b4b4, #fff) padding-box,
    linear-gradient(#fff, #f1b4b4) border-box;
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