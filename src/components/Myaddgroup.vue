<template lang="html">
  <div class="myaddgroup">
    <section class="info">
      <h4 class="title">群名称</h4>
      <p class="number">群人数3人</p>
      扫码收钱
      <button type="button" name="button">分享</button>
      <button type="button" name="button">进群</button>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: ''
    }
  },
  created () {
    this.id = this.$route.query.id
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/style";
  .myaddgroup{
    padding: 1rem 0 .53rem 0;
    .info{
      .title{
        font-size: .53rem;
        color: $btnColor9;
      }
      .number{
        margin-top: .27rem;
      }
    }
  }
</style>
