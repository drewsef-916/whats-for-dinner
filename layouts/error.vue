<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <img class="liam" src="https://wfd-photo-storage.s3.amazonaws.com/liam-oil-paint-smaller.png
    " alt="">
    <nuxt-link to="/">Home page</nuxt-link>
    <a class="img-credit" href="https://pngtree.com/free-vectors">free vectors from pngtree.com</a>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default' // you can set a custom layout for the error page
}
</script>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .container {
      display: grid;
      justify-content: center;
      text-align: center;
      margin-top: 15vh;
  }
  .liam {
    max-width: 80vw;
    opacity: 0;
    animation: fade-in ease 2.0s forwards;
  }
  .img-credit {
    display: none;
  }
</style>
