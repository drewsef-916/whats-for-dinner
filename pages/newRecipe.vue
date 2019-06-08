<template>
    <div>
        <h1>Add a new recipe!</h1>
        <form @submit="onSubmit(recipeName)">
            <input v-model="name" placeholder="Name"/>
            <!-- <input v-model="recipeIngredients" placeholder="Ingredients"/>
            <input v-model="recipeDirections" placeholder="Directions"/> -->
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {

    data() {
        return {
            name: '',
            
        }
    },

    methods: {
        onSubmit(name) {
            alert(name)
        }
    }
}
</script>

<style>
    
</style>