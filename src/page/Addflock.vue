<template lang="html">
  <div class="addflock">
    <section class="help">
      <h3>1.长按复制下方“群绑定码”</h3>
      <input type="text" name="" value="12345" readonly>
    </section>
    <section class="help">
      <h3>2.添加“蚂蚁众投机器人”为好友</h3>
      <p class="code"><img src="https://qr.api.cli.im/qr?data=http%253A%252F%252F192.168.1.117%253A8080%252F%2523%252Faddflock%253Fid%253D448&level=H&transparent=false&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=280&kid=cliim&key=ce8c8f7a9f0baad077763a72d914ba86" alt=""></p>
    </section>
    <section class="help">
      <h3>3.您需要自己创建一个群</h3>
      <h3>然后把“蚂蚁众投机器人”拉入群中，再将群转让给"蚂蚁众投机器人</h3>
      <h3>最后在群里输入第一步的“群绑定码”</h3>
    </section>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  created () {
    console.log(this.$route.query.id)
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
