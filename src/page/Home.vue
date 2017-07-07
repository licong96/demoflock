<template lang="html">
  <div class="home">
    <!-- 头部 -->
    <header class="header">
      <figure class="figure">
        <img :src="userData.headimgurl" alt="">
        <p>{{userData.nickname}}</p>
        <span v-if="userData.sex==1">男</span>
        <span v-else>女</span>
      </figure>
      <div class="btn">
        <my-picker :picker="userData"></my-picker>
      </div>
    </header>
    <!-- 余额 -->
    <section class="moany">
      <div class="moany-warp">
        <p>余额（元）</p>
        <div class="text">0.00元</div>
        <span class="waves-effect waves-block waves-light" @click="withdraw">提现</span>
      </div>
    </section>
    <!-- 我的群 -->
    <section class="flock">
      <h3>我的群</h3>
      <nav>
        <span @click="fntab(1)" :class="{active: active===1}">我加的群</span>
        <span @click="fntab(2)" :class="{active: active===2}">我建的群</span>
      </nav>
      <div class="flock-center">
        <div class="list" v-show="active===1" key="list1">
          <ul :class="{active: active===1}">
            <li v-for="item in join">
              <span class="title">{{item.gname}}</span>
              <span class="number">状态</span>
              <router-link :to="{ path: '/myaddgroup', query: { id: item.id }}">
                <span class="btn"><button type="button">进入</button></span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="list" v-show="active===2" key="list2">
          <ul :class="{active: active===2}">
            <li v-for="item in create">
              <span class="title">{{item.gname}}</span>
              <span class="number"></span>
              <router-link :to="{ path: '/mybuildgroup', query: { id: item.id }}">
                <span class="btn"><button type="button">查看</button></span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MyPicker from '../components/Picker'

export default {
  data () {
    return {
      active: 1,
      userData: {},
      join: [],
      create: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fntab (index) {     // tab切换
      this.active = index
    },
    fetchData () {    // 判断是否登录，获取微信名称和头像
      var _this = this
      this.axios.get('userinfo.php')
        .then(function (response) {
          if (response.data) {
            _this.userData = response.data
            _this.getLIstData()     // 获取群列表
          } else {
            window.location.href = 'oauth2.php'
          }
        })
        .catch(function (error) {
          _this.swal('网络错误', error, 'error')
        })
    },
    getLIstData () {    // 获取群列表
      var _this = this
      this.axios.get('wxgroupapi.php?type=mygrouplist')
        .then(function (response) {
          if (response.data.status === 1) {
            _this.join = response.data.join
            _this.create = response.data.create
            alert(JSON.stringify(_this.join))
            alert(JSON.stringify(_this.create))
          } else {
            alert('什么都没有')
          }
        })
        .catch(function (error) {
          _this.swal('网络错误', error, 'error')
        })
    },
    withdraw () {
      this.swal('暂时不能提现', '', 'error')
    }
  },
  components: {
    MyPicker
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/style";

  .home{
    background-color: $color6;
  }
  // 头部
  .header{
    text-align: center;
    background-color: #fff;
    padding: .4rem 0;
    .figure{
      margin-top: .5rem;
      img{
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 1.2rem;
        border: 1px solid #eee;
      }
      p{
        padding-top: .03rem;
        font-size: .37rem;
        font-size: .4rem;
        color: $txtColor1;
      }
      span{
        font-size: .32rem;
        color: $txtColor2;
      }
    }
    .btn{
      width: 60%;
      margin: .27rem auto 0 auto;
      font-size: .43rem;
      span{
        display: block;
        margin-top: .8rem;
        padding: .4em 1em;
        border: 1px solid $btnColor9;
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
        font-size: .32rem;
        color: $txtColor2;
      }
      .text{
        padding: .4rem 0;
        font-size: .64rem;
        font-weight: 400;
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
        font-size: .43rem;
      }
    }
  }
  // 我的群
  .flock{
    margin-top: .27rem;
    padding: .4rem .4rem 1rem .4rem;
    background-color: #fff;
    text-align: center;
    overflow: hidden;
    h3{
      font-size: .43rem;
      color: $txtColor2;
    }
    nav{
      display: flex;
      padding-top: .21rem;
      font-size: .43rem;
      @include botder(b);
      span{
        position: relative;
        flex: 1;
        line-height: 1.07rem;
        font-size: .43rem;
        &:after{
          content: "";
          position: absolute;
          z-index: 9;
          left: 50%;
          bottom: 0px;
          width: 60%;
          border-bottom: 2px solid #f55d54;
          border-radius: 2px;
          transform: translateX(-50%) scaleX(0);
          transition: all 0.2s ease-out;
        }
      }
      span.active{
        color: #eb4f38;
        &:after{
          transform: translateX(-50%) scaleX(1);
        }
      }
    }
    // 切换内容
    .flock-center{
      text-align: left;
      .list{
        padding: .4rem 0;
        font-size: .43rem;
        li{
          display: flex;
          margin-bottom: .53rem;
          span{
            text-align: center;
            display: block;
          }
          .title{
            flex: 4;
            color: $txtColor1;
          }
          .number{
            flex: 1;
            color: $txtColor2;
          }
          a{
            flex: 2;
          }
          .btn{
            button{
              display: inline-block;
              overflow: hidden;
              padding: 0 .47rem;
              height: .69rem;
              line-height: .69rem;
              background: #fff;
              border: 1px solid $btnColor1;
              border-radius: .53rem;
              color: $btnColor1;
              font-size: .37rem;
            }
            &:active{
              button{
                opacity: .8;
                background-color: $btnColor1;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }

  .list{
    .active{
      li{
        animation: fadeInShow 0.6s;
        animation-fill-mode: both;
      }
    }
  }

  @keyframes fadeInShow {
    from {
      opacity: 0;
      transform: translate3d(100px, 0, 0);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
</style>
