<template lang="html">
  <div class="addflock">
    <section class="help">
      <h3>1.添加“蚂蚁众投机器人”为好友</h3>
      <p class="code"><img src="../../static/img/greet.jpg" alt=""></p>
    </section>
    <section class="help">
      <h3>2.长按复制下方“群绑定码”</h3>
      <input type="text" v-model="binding" readonly>
    </section>
    <section class="help">
      <h3>3.您需要自己创建一个群</h3>
      <h3>然后把“蚂蚁众投机器人”拉入群中，再将群转让给“蚂蚁众投机器人”</h3>
      <h3>最后在群里输入第2步的“群绑定码”</h3>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      binding: ''
    }
  },
  created () {
    this.binding = 'group' + this.$route.query.id
  }
}
</script>

<style lang="scss" scoped>
  @import "../scss/style";
  .addflock{
    padding: 1rem 0 .53rem 0;
    .help{
      padding: .4rem;
      text-align: center;
      h3{
        margin-bottom: .27rem;
        font-size: .48rem;
        color: $btnColor1;
      }
      input{
        text-align: center;
        padding: .16rem 0;
        background-color: rgba(0,0,0,.6);
        box-shadow: 1px 2px 4px 1px rgba(0,0,0,.1);
        color: #fff;
        border: 0;
        font-size: .53rem;
        letter-spacing: .05rem;
        border-radius: .53rem;
      }
      .code{
        max-width: 6.67rem;
        min-height: 6.67rem;
        margin: 0 auto;
        padding: .13rem;
        border: 1px solid rgba(0,0,0,.1);
        box-shadow: 1px 1px 4px 1px rgba(0,0,0,.1), -1px 1px 4px 1px rgba(0,0,0,.1);
        border-radius: .16rem;
        img{
          display: block;
          width: 100%;
        }
      }
    }
  }
</style>
