<template>
    <div>
        <h3>{{recipe.name}}</h3>
        <ul class="ingredients" v-for="ingredient in ingredients" v-bind:key="ingredient.index">
            {{ingredient}}
        </ul>
        <ul class="directions" v-for="direction in directions" v-bind:key="direction.index">
            {{direction}}
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['name', 'ingredients', 'directions']
    }
</script>

<style scoped>
    
</style>