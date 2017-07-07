<template>
  <div id="perspective" class="perspective effect-airbnb" ref="perspective">
		<div class="container">
			<div class="wrapper"><!-- wrapper needed for scroll -->
				<!-- Top Navigation -->
				<div class="main clearfix">
					<div class="column">
						<button id="showMenu" class="btn-nav"><i class="iconfont icon-daohang"></i></button>
            <transition name="component-fade" mode="out-in">
            <router-view></router-view>
            </transition>
					</div>
				</div><!-- /main -->
			</div><!-- wrapper -->
		</div><!-- /container -->
    <nav class="outer-nav left vertical" @click="coutert">
      <router-link to="/">首页</router-link>
      <router-link to="/withdraw">提现</router-link>
      <router-link to="/operation">加群</router-link>
      <router-link to="/help">帮助中心</router-link>
      <router-link to="/feedback">意见反馈</router-link>
    </nav>
	</div><!-- /perspective -->
</template>

<script>
import classie from 'desandro-classie'
import Waves from '../static/js/waves.min.js'

export default {
  name: 'app',
  created () {
    Waves.displayEffect()      // 点击效果
  },
  methods: {
    coutert () {
      // 关闭导航
      var box = this.$refs.perspective
      classie.remove(box, 'animate')
      setTimeout(function () {
        classie.remove(box, 'modalview')
      }, 400)
    }
  }
}
</script>

<style lang="scss">
@import "./scss/style";
@import "./assets/css/flexible.css";
@import "./assets/css/demo.css";
@import "./assets/css/component.css";
@import "./assets/css/waves.min.css";
@import "./assets/css/sweetalert.css";

  html,body{
    font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
  }
  .btn-nav{
    position: absolute;
    top: .16rem;
    left: 0;
    z-index: 9;
    background-color: #e96e4f;
    border: none;
  	padding: 0.5em .8em;
  	color: #fff;
  	letter-spacing: 1px;
  	text-transform: uppercase;
  	cursor: pointer;
  	display: inline-block;
  	margin: 10px;
  	border-radius: .06rem;
  	outline: none;
    i.iconfont{
      display: inline-block;
      font-size: .45rem;
    }
  }
  .outer-nav{
    a{
      margin: .8rem 0 .8rem 0;
      font-size: .43rem;
      font-weight: 700;
    }
  }

  .picker-choose{
    span{
      font-size: .43rem;
    }
    .confirm{
      color: $btnColor9 !important;
    }
    .picker-title{
      font-size: .48rem !important;
    }
  }
  // alert提示颜色
  .sweet-alert .confirm{
    background-color: $btnColor10 !important;
  }

  // 组件过渡
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-to{
    opacity: 0;
  }
</style>
