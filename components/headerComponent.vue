<template>
    <div class="header-container">
        <navSearch :recipeList="this.recipes"/>
        <nuxt-link to="/about">
            <navAbout :recipeList="this.recipes"/>
        </nuxt-link>
        <nuxt-link to="/">
            <img class="logo" src="~/assets/wfd-logo.png"/>
        </nuxt-link>
        <navCalendar :recipeList="this.recipes"/>
        <!-- <div>
            <nuxt-link to="/converter">
                <fa icon="exchange-alt" class="icon"/>
            </nuxt-link>
        </div> -->
        <div>
            <nuxt-link to="/newRecipe">
                <fa icon="plus" class="icon"/>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import navAbout from '~/components/navAbout.vue';
import navSearch from '~/components/navSearch.vue';
import navCalendar from '~/components/navCalendar.vue';

export default {
    components: {
        navAbout,
        navSearch,
        navCalendar
    },
    computed: {
        recipes() {
            return this.$store.state.recipes
        }
    },
}
</script>

<style scoped>
    .header-container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        justify-items: center;
        align-items: center;
        height: 15vh;
        width: 100vw;
        border: 1px solid black;
        background: #fff;
        position: fixed;
        top: 0;
        margin-bottom: 15vh;
    }

    .logo {
        max-height: 12vh;
    }

</style>