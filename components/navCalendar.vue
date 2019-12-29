<template>
  <div>
    <fa icon="calendar-day" class="icon has-menu" @click="sortByOldest"/>
  </div>
</template>

<script>
export default {
  methods: {
    sortByOldest: function() {
      this.$store.commit('sortRecipes')
    }
  }
}
</script>

<style>
  .icon {
        font-size: 1.5rem;
        color: black;
    }
</style>
