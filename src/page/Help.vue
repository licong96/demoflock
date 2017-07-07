<template lang="html">
  <div class="help">
    <router-link to="/">
      <button type="button" class="waves-effect waves-button waves-float">帮助中心暂无，回首页</button>
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "../scss/style";
  .help{
    font-size: .43rem;
    button{
      background-color: $btnColor9;
      color: #fff;
      margin-top: 45%;
    }
  }
</style>
