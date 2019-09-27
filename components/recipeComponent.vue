<template>
    <div>
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
</template>

<script>
    export default {
        props: ['recipe'],
        // data: () => {
        //     return {
        //         isLoading: false
        //     }
        // },
        mounted() {
            this.$nuxt.$loading.finish()
        }
    }
</script>

<style scoped>
.directions {
  text-align: center;
  padding: 0;
}

.ingredients {
  text-align: center;
  padding: 0;
}

</style>