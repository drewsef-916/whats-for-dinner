<template>
  <div class="container">
    <main class="error-nf" v-if="error.statusCode === 404">
      <h1 class="error-text">4</h1>
      <img class="liam" src="https://wfd-photo-storage.s3.amazonaws.com/liam-oil-paint-smaller.png
      " alt="">
      <h1 class="error-text">4</h1>
    </main>
    <h1 v-else>Oh no! An error occurred</h1>
    <nuxt-link class="back-home" to="/">Back to Homepage</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default' // you can set a custom layout for the error page
}
</script>

<style>
  .container {
    display: grid;
    justify-content: center;
    text-align: center;
    margin-top: 15vh;
  }
  .error-nf {
    margin-top: 2vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  }
  .liam {
    max-width: 12vw;
    margin-top: 2rem;
    /* animation: fade-in ease 2.0s forwards; */
    clip-path: circle();
  }
  .back-home {
    font-family: 'Handlee', cursive;
    margin-top: 2rem;
    font-size: 2rem;
  }
  .error-text {
    margin: 0;
    font-family: cursive;
    font-size: 12rem;
  }
</style>
