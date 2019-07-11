<template>  
  <div>
    <fa icon="search" class="icon has-menu" @click="navMenu"/>
    <div class="search-menu menu-toggle">
        <input type="text" placeholder="Find a recipe">
    </div>
    <aside class="searchbox">
      <input type="text" placeholder="find a recipe...">
      <fa icon="times-circle" class="icon close" @click="buttonClose"/>
    </aside>
  </div>
</template>

<script>
export default {
  props: ['recipeList'],
  methods: {
    navMenu: function() {
      const searchBox = this.$el.lastChild;
      searchBox.style.display = "grid";
    },
    buttonClose: function() {
      this.$el.lastChild.style.display = "none";
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
  .searchbox {
    display: none;
    position: absolute;
    background: #F1B4B4;
    grid-template-columns: 5fr 1fr;
    align-items: center;
    top: 15vh;
    left: 35vw;
    min-height: 15vh;
    width: 30vw;
    font-size: 3rem;
  }
  .searchbox input {
    height: 3rem;
    font-size: 2rem;
  }
  .searchbox .close {
    width: 50%;
    margin: 0 auto;
  }
</style>
