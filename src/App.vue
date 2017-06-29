<template>
  <div id="perspective" class="perspective effect-airbnb" ref="perspective">
		<div class="container">
			<div class="wrapper"><!-- wrapper needed for scroll -->
				<!-- Top Navigation -->
				<div class="main clearfix">
					<div class="column">
						<p><button id="showMenu"><i class="iconfont icon-daohang"></i>Show Menu</button></p>
            <router-view></router-view>
					</div>
				</div><!-- /main -->
			</div><!-- wrapper -->
		</div><!-- /container -->
    <nav class="outer-nav left vertical" @click="coutert">
      <router-link to="/">首页</router-link>
      <router-link to="/">提现</router-link>
      <router-link to="/addflock">建群</router-link>
      <router-link to="/">加群操作</router-link>
      <router-link to="/">意见反馈</router-link>
    </nav>
	</div><!-- /perspective -->
</template>

<script>
import classie from 'desandro-classie'
export default {
  name: 'app',
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
  html,body{
    font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
  }
  .container .nav{
    padding: .16rem .23rem;
    i.iconfont{
      display: inline-block;
      font-size: .55rem;
    }
  }
</style>
