<template>
  <div class="page-wrapper">
    <main class="recipe-container">
        <div class="recipe" v-for="recipe in recipes" v-bind:key="recipe.id">
          <recipeComponent :recipe="recipe"></recipeComponent>
        </div>
    </main>
  </div>
</template>

<script>
import recipeComponent from '~/components/recipeComponent.vue';

export default {
  components: {
    recipeComponent
  },
  computed: {
    recipes() {
      return this.$store.state.recipes
    }
  },
  created() {
    this.$store.dispatch('fetchRecipes')
  },
  mounted() {
    this.$nextTick(() => {
      if (! this.$store.state.recipes.length) {
        setTimeout(() => {
          this.$nuxt.$loading.start()
        }, 100)
      }
    })
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
.page-title {
  text-align: center;
}
</style>