<template lang="html">
  <div class="mybuildgroup">
    群id
    {{id}}
    <button type="button" name="button">分享</button>
  </div>
</template>

<script>
import wx from 'weixin-js-sdk'

export default {
  data () {
    return {
      id: '',
      wxconfig: {}
    }
  },
  created () {
    this.id = this.$route.query.id
    var _this = this
    this.axios.get('wxgroupapi.php?type=weixinshare')
      .then(function (response) {
        _this.wxconfig = response.data
        _this.config()
      })
      .catch(function (error) {
        _this.swal('网络错误', error, 'error')
      })
  },
  methods: {
    config () {
      var _this = this
      alert(_this.wxconfig.appId)
      wx.config({
        debug: true,  // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: _this.wxconfig.appId,  // 必填，公众号的唯一标识
        timestamp: _this.wxconfig.timestamp,  // 必填，生成签名的时间戳
        nonceStr: _this.wxconfig.nonceStr,   // 必填，生成签名的随机串
        signature: _this.wxconfig.signature,  // 必填，签名，见附录1
        jsApiList: [
          'onMenuShareAppMessage'
        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      })
      wx.ready(function () {
        wx.onMenuShareAppMessage({
          title: '群名字', // 分享标题
          desc: '群描述', // 分享描述
          link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: '', // 分享图标
          type: '', // 分享类型,music、video或link，不填默认为link
          dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
          success: function () {
            alert('确认分享')
            // 用户确认分享后执行的回调函数
          },
          cancel: function () {
            alert('取消分享')
            // 用户取消分享后执行的回调函数
          }
        })
      })
      wx.error(function (res) {
        alert('res')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/style";
  .mybuildgroup{
    padding: 1rem 0 .53rem 0;
  }
</style>
