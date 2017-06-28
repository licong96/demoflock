<template>
  <div id="app">
    <div id="perspective" class="perspective effect-rotateleft">
			<div class="container" id="clicks">
				<div class="wrapper"><!-- wrapper needed for scroll -->
					<!-- Top Navigation -->
					<div class="main clearfix">
						<div class="123">
              <p><button id="showMenu">Show Menu</button></p>
              <router-view></router-view>
						</div>
					</div>
				</div><!-- wrapper -->
			</div><!-- /container -->
			<nav class="outer-nav right vertical">
				<a href="#" class="icon-home">首页</a>
				<a href="#" class="icon-news">News</a>
				<a href="#" class="icon-image">Images</a>
				<a href="#" class="icon-upload">Uploads</a>
				<a href="#" class="icon-star">Favorites</a>
			</nav>
		</div><!-- /perspective -->
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      coutert () {
      }
    }
  }
</script>

<style lang="scss">
@import "./scss/style";
  html,body{
    font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
    background-color: $color6;
  }
</style>
