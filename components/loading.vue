<template>
  <div class="loading-page" v-if="loading">
    <p>Loading...</p>
    <img class="loading-cat" src="https://wfd-photo-storage.s3.amazonaws.com/bongo_cat.gif "/>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
}
.loading-cat {
  width: 300px;
  height: 300px;
}
</style>