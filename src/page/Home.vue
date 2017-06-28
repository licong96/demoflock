<template lang="html">
  <div class="home">
    <!-- 头部 -->
    <header class="header">
      <figure class="figure">
        <img src="../assets/logo.png" alt="">
        <p>用户名</p>
      </figure>
      <div class="btn">
        <button type="button" class="waves-effect waves-button waves-float waves-light">创建群</button>
        <span class="waves-effect waves-block">项目名称</span>
      </div>
    </header>
    <!-- 余额 -->
    <section class="moany">
      <div class="moany-warp">
        <p>余额（元）</p>
        <div class="text">0.00元</div>
        <span class="waves-effect waves-block waves-light">提现</span>
      </div>
    </section>
    <!-- 我的群 -->
    <section class="flock">
      <h3>我的群</h3>
      <nav>
        <span>全部</span>
        <span>群主</span>
        <span>我的申请</span>
      </nav>
      <div class="flock-center">
        <div class=""></div>
      </div>
    </section>
  </div>
</template>

<script>
import Waves from '../../static/js/waves.min.js'

export default {
  created () {
    Waves.displayEffect()      // 点击效果
  }
}

</script>
<style lang="scss" scoped>
@import "../scss/style";
@import "../../static/css/waves.min.css";
  // 头部
  .header{
    text-align: center;
    background-color: #fff;
    padding: .4rem 0;
    .figure{
      img{
        width: 1.07rem;
        height: 1.07rem;
        border-radius: 1.07rem;
        border: 1px solid #eee;
      }
      p{
        padding-top: .03rem;
        @include font(12px);
      }
    }
    .btn{
      width: 60%;
      margin: .27rem auto 0 auto;
      @include font(16px);
      button{
        display: block;
        padding: .6em 1em;
        width: 100%;
        background-color: $btnColor1;
        color: $color;
        @include font(16px);
      }
      span{
        display: block;
        margin-top: .53rem;
        padding: .4em 1em;
        border: 1px solid $btnColor1;
        border-radius: .2em;
        color: $btnColor1;
      }
    }
  }
  // 余额
  .moany{
    margin-top: .27rem;
    padding: .4rem 0;
    background-color: #fff;
    .moany-warp{
      width: 60%;
      margin: 0 auto;
      text-align: center;
      p{
        @include font(12px);
        color: $txtColor2;
      }
      .text{
        padding: .4rem 0;
        @include font(20px);
        color: $color1;
      }
      span{
        display: block;
        padding: .4em 0;
        border-radius: .2em;
        width: 100%;
        text-align: center;
        background-color: $btnColor3;
        color: $color;
        box-sizing: border-box;
        @include font(16px);
      }
    }
  }
  // 我的群
  .flock{
    margin-top: .27rem;
    padding: .4rem;
    background-color: #fff;
    text-align: center;
    h3{
      @include font(18px);
      color: $color1;
      border-bottom: 1px solid #ddd;
    }
    nav{
      display: flex;
      @include font(16px);
      span{
        flex: 1;
      }
    }
  }
  p{
    @include font(16px);
  }
</style>
