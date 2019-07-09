<template>  
  <div>
    <fa icon="search" class="icon has-menu" @click="navMenu"/>
    <div class="search-menu menu-toggle">
        <input type="text" placeholder="Find a recipe">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navMenu: function() {
      alert('this is the search button');
    }
  }
}
</script>

<style>
  .search-menu {
    display: none;
  }

  .icon {
        font-size: 1.5rem;
        color: black;
    }
</style>
