<template>
  <div>
    <headerComponent />
    <nuxt />
  </div>
</template>

<script>
import headerComponent from '~/components/headerComponent.vue'

export default {
  components: {
    headerComponent
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Titan+One|Varela&display=swap');

html {
  box-sizing: border-box;
  font-family: 'Varela', sans-serif;
}

h1 {
  font-family: 'Titan One', cursive;
}

</style>
