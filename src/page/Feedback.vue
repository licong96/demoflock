<template lang="html">
  <div class="feedback">
    <router-link to="/">
      <button type="button" class="waves-effect waves-button waves-float">意见反馈暂无，回首页</button>
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "../scss/style";
  .feedback{
    font-size: .43rem;
    button{
      background-color: $btnColor9;
      color: #fff;
      margin-top: 45%;
    }
  }
</style>
