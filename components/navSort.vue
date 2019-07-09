<template>  
  <div>
    <fa icon="sort" class="icon has-menu" @click="navMenu"/>
    <div class="sort-menu menu-toggle">
        <p>Sort option 1</p>
        <p>Sort option 2</p>
        <p>Sort option 3</p>
        <p>Sort option 4</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navMenu: function() {
      alert('this is the nav button');
    }
  }
}
</script>

<style>
  .sort-menu {
    display: none;
  }
  .icon {
        font-size: 1.5rem;
        color: black;
    }
</style>


