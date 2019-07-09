<template>
    <div class="header-container">
        <navSearch />
        <navSort />
        <nuxt-link to="/">
            <img class="logo" src="~/assets/wfd-logo.png"/>
        </nuxt-link>
        <navCalendar />
        <div>
            <nuxt-link to="/newRecipe">
                <fa icon="plus" class="icon"/>
            </nuxt-link>
        </div>
        <!-- <div class="toggle-background">
            <span class="arrow"></span>
        </div> -->
    </div>
</template>

<script>
import navSort from '~/components/navSort.vue';
import navSearch from '~/components/navSearch.vue';
import navCalendar from '~/components/navCalendar.vue';

export default {
    components: {
        navSort,
        navSearch,
        navCalendar
    },
    methods: {
       
    }
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
        max-height: 15vh;
    }
    
</style>