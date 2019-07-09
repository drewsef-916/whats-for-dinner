<template>  
  <div>
    <fa icon="calendar-day" class="icon has-menu" @click="navMenu"/>
    <div class="calendar-menu menu-toggle">
        <p>More than 2 weeks ago</p>
        <p>More than a month ago</p>
        <p>More than 6 weeks ago</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navMenu: function() {
      alert('this is the date select button');
    }
  }
}
</script>

<style>
  .calendar-menu {
    display: none;
  }

  .icon {
        font-size: 1.5rem;
        color: black;
    }
</style>
