<template>
    <div>
        <h1>Individual Recipe</h1>
        <h2>{{recipe.name}}</h2>
        <p>{{recipe.ingredients}}</p>
        <p>{{recipe.directions}}</p>
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
    axios.get(`${process.env.baseUrl}/api/recipes`)
    .then(res => {
      this.recipe = res.data.find(recipe => recipe.id === this.$route.params.id)
    })
    .catch(err => console.log(err))
  },

}
</script>

<style>

</style>
