<template>
    <div class="header-container">
        <h4>Search</h4>
        <img class="logo" src="~/assets/wfd-logo.png"/>
        <h4>New Recipe</h4>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .header-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        align-items: center;
        height: 15vh;
        width: 100vw;
        border: 1px solid black;
    }

    .logo {
        max-width: 100px;
    }
</style>