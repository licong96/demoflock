<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import "./scss/style";
  html,body{
    font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
    background-color: $color6;
  }
</style>
