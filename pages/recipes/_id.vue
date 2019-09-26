<template>
    <div class="page-wrapper">
      <main class="recipe-container">
        <div class="recipe">
          <h3>{{recipe.name}}</h3>
          <ul class="ingredients">
            <h5>Ingredients</h5>
            <hr>
            <li v-for="(ingredient, index) in recipe.ingredients" v-bind:key="ingredient.index" @click="crossItOutIng(index)" ref="ingredient">
              {{ingredient}}
            </li>
          </ul>
          <ul class="directions">
            <h5>Directions</h5>
            <hr>
            <li v-for="(direction, index) in recipe.directions" v-bind:key="direction.index" @click="crossItOutDir(index)" ref="direction">
              {{direction}}
            </li>
          </ul>
        <p>Last Eaten: {{toHumanDate(recipe.lastEaten)}}</p>
        <button class="log-date" @click="logDate">I made this today!</button>
        </div>
    </main>
    </div>
</template>

<script>

export default {
  computed: {
    recipe() {
      return this.$store.state.recipe
    }
  },
  created() {
    console.log($nuxt)
    const routeId = $nuxt._route.params.id
    this.$store.commit({
      type: 'setRecipe',
      recipeId: routeId
    })
  },
  methods: {
    crossItOutDir: function(index) {
      const direction = this.$refs.direction[index]
      direction.style.textDecoration === "line-through" ?
      direction.style.textDecoration = "none" :
      direction.style.textDecoration = "line-through";
    },
    crossItOutIng: function(index) {
      const ingredient = this.$refs.ingredient[index]
      ingredient.style.textDecoration === "line-through" ?
      ingredient.style.textDecoration = "none" :
      ingredient.style.textDecoration = "line-through";
    },
    logDate: function() {
      const currentRecipe = this.recipe;
      const jsonToday = new Date().toJSON();
      const justTheDate = jsonToday.slice(0, 10);
      currentRecipe.lastEaten = justTheDate;
      currentRecipe.timesEaten++;
    },
    toHumanDate: function(date) {
      try {
        return new Date(date).toLocaleDateString();
      } catch(err) {
        console.warn(err);
        return '???';
      }
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
    min-height: 85vh;
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

  .log-date {
    border: 1px solid black;
    background-color: #E47373;
    margin-bottom: 1rem;
    border-radius: 5px;
    width: 50%;
    height: 2.5rem;
    font-size: 1rem;
  }
</style>
