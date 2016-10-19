<style lang="stylus">
	*
		margin 0
		padding 0
		line-height 1
		font-family Microsoft Yahei
		color rgb(51, 51, 51)
	a
		text-decoration none
		clolor inherit
	ul
	li
		list-style none
	em
	i
		font-style normal
	.w1180
		margin 0 auto
		width 1180px
</style>
<template>
<div id="app">
	<my-header></my-header>
	<my-nav></my-nav>
	<router-view></router-view>
	<my-footer></my-footer>
</div>
</template>

<script>
	import MyHeader from "./components/Header";
	import MyNav from "./components/Nav";
	import MyFooter from "./components/Footer";
	export default {
		components : {
			MyHeader,
			MyNav,
			MyFooter
		}
	};
</script>


