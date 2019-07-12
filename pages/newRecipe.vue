<template>
    <div class="page-wrapper">
        <main class="new-recipe">
            <h1>Add a new recipe!</h1>
            <form class="content" action="" method="post">
               <label for="name">
                   Recipe Name:
               </label>
               <input name="name" id="name" type="text">
               <label for="ingredients">
                   Ingredients:
               </label>
               <input name="ingredients" type="text">
               <label for="directions">
                   Directions:
               </label>
               <input name="directions" type="text">
               <button type="submit">Add Recipe</button>
            </form>
        </main>
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

<style scoped>
    input {
        margin-bottom: 10px;
    }
    .page-wrapper {
        background: url(../assets/bg.png);
        background-attachment: fixed;
        height: 85vh;
        margin-top: 15vh;
    }
    .new-recipe {
        display: grid;
        justify-content: center;
        justify-items: center;
        width: 80vw;
        margin: 30px auto;
        border: 2px solid black;
        border-radius: 10px;
        background: white;
    }
</style>