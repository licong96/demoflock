<template lang="html">
  <div class="withdraw">
    <router-link to="/">
      <button type="button" class="waves-effect waves-button waves-float">提现暂无，回首页</button>
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "../scss/style";
  .withdraw{
    font-size: .43rem;
    button{
      background-color: $btnColor9;
      color: #fff;
      margin-top: 45%;
    }
  }
</style>
