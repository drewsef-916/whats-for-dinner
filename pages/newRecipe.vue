<template>
    <div class="page-wrapper">
        <main class="new-recipe">
            <h3>Add a new recipe!</h3>
            <form class="content" action="" method="post">
               <div class="name-container">
                    <label for="name">
                        Recipe Name
                    </label>
                    <input name="name" id="name" type="text">
               </div>
                <fa icon="chevron-up" @click="removeLines(ingredinet)"/>
                <label for="ingredients">
                    Ingredients
                </label>
                <fa icon="chevron-down" @click="addLines(ingredient)"/>
               <div class="ing-container" ref="ing-container" v-for="(item, index) in this.ingredients" v-bind:key="index">
               </div>
                <fa icon="chevron-up" @click="removeLines(direction)"/>
                <label for="directions">
                    Directions
                </label>
                <fa icon="chevron-down" @click="addLines(direction)"/>
               <div class="dir-container" ref="dir-container" v-for="(item, index) in this.directions" v-bind:key="index">
               </div>
               <button type="submit" class="submit">Add Recipe</button>
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
            ingredients: [
                `<input name="ingredient" type="text" ref="ingredient">`
            ],
            directions: [
                `<input name="direction" type="text" ref="direction">`
            ]
        }
    },

    methods: {
        onSubmit(name) {
            alert(name)
        },
        addLines(type) {
            console.log(this.$refs.type);
        },
        removeLines(type) {
            console.log('remove lines');
        }
    }
}
</script>

<style scoped>
    input {
        margin-bottom: 10px;
        border: 1px solid gray;
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
    .ing-container, .dir-container, .name-container {
        display: grid;
        justify-content: center;
        text-align: center;
        padding-top: 5px;
    }
    .submit {
        display: block;
        margin: 0 auto;
        font-size: 1.3rem;
        border: 3px solid grey;
        border-radius: 5px;
        background: white;
    }
</style>