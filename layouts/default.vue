<template>
  <div>
    <headerComponent ref="headerComp"/>
    <nuxt />
  </div>
</template>

<script>
import headerComponent from '~/components/headerComponent.vue'

export default {
  components: {
    headerComponent
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Handlee&display=swap');
@import url('https://fonts.googleapis.com/css?family=Work+Sans&display=swap');

body {
  margin: 0;
}

html {
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
}

h1, h2, h3, h4 {
  font-family: 'Handlee', cursive;
}

h3 {
  font-size: 1.5rem;
  text-align: center;
  color: #777;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

.recipe-container:first-of-type {
  margin-top: 15vh;
}

</style>
