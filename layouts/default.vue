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
  // mounted: function() {
  //   const header = this.$refs.headerComp;
  //   console.log(header);
  // }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Titan+One|Varela&display=swap');

body {
  margin: 0;
}

html {
  box-sizing: border-box;
  font-family: 'Varela', sans-serif;
}

h3 {
  font-family: 'Titan One', cursive;
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
