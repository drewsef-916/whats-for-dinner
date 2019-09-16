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
            <li v-for="(direction, index) in recipe.directions" v-bind:key="direction.index" @click="crossItOut(index)" ref="direction">
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
  data: function() {
    return {
        recipe: {},
    }
  },
  created: function() {
    console.log(this.$route.path)
    // this.$axios.get('https://fast-reef-73314.herokuapp.com/recipes')
    // .then(res => {
    //   res.filter(recipe => recipe.id == $nuxt.$route.path)
    // })
    // .catch(err => {
    //   console.log(err)
    // })
  },
  methods: {
    crossItOut: function(index) {
      const refDirection = this.$refs;
      const direction = this.$refs.direction[index];
      direction.style.textDecoration === "line-through" ?
      direction.style.textDecoration = "none" :
      direction.style.textDecoration = "line-through";
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
