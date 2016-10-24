<style scoped lang="stylus">
	.daiyan
		ocerflow hidden
		.title
			margin-top 50px
			margin-bottom 40px
		.daiyan1
			position relative
			width 580px
			height 200px
			float left
			margin-bottom 20px
			&:nth-of-type(2n)
				margin-right 20px
			img
				float left
			.name
				position absolute
				top 30px
				left 400px
				font-size 18px
				font-weight 550
			.i3
				position absolute
				top 100px
				left 400px
				background-position 0 -22px
			.i4
				position absolute
				top 100px
				left 430px
				background-position 0 -44px
			.btn1
				position absolute
				top 75px
				left 485px
				width 100px
				height 30px
				background-color rgb(81, 81, 81)
				font-size 14px
				text-align center
				line-height 30px
				color white
			.btn2
				position absolute
				top 120px
				left 485px
				width 100px
				height 30px
				background-color rgb(121, 121, 121)
				font-size 14px
				text-align center
				line-height 30px
				color white
			.rank
				position absolute
				top 135px
				left 400px
				&:after
					content "人喜欢"
					font-size 14px
					line-height 16px
			.buy
				position absolute
				top 160px
				left 400px
				&:after
					content "已经购买"
					font-size 14px
					line-height 16px
</style>
<template>
	<div class="daiyan w1180">
			<div class="title">
				<h2>为我代言!</h2>
			</div>
			<div class="daiyan1" v-for="item of daiyan">
				<img :src="item.url" />
				<span class="name">{{item.name}}</span>
				<i class="i3"></i><i class="i4"></i>
				<div class="btn1">我要代言</div>
				<div class="btn2">立即购买</div>
				<span class="rank">{{item.ranking}}</span>
				<span class="buy">{{item.buy}}</span>
			</div>
		</div>
</template>
<script>
	export default {
		data(){
			return {
				daiyan : [
					{
						url : require ("../images/5sOW5mHk-0.jpg"),
						name : "QueenJewelry",
						ranking : "9999",
						buy : "10000"
					},
					{
						url : require ("../images/5sOW5mHk-1.jpg"),
						name : "QueenJewelry",
						ranking : "9999",
						buy : "10000"
					},
					{
						url : require ("../images/5sOW5mHk-2.jpg"),
						name : "QueenJewelry",
						ranking : "9999",
						buy : "10000"
					},
					{
						url : require ("../images/5sOW5mHk-3.jpg"),
						name : "QueenJewelry",
						ranking : "9999",
						buy : "10000"
					},
					{
						url : require ("../images/5sOW5mHk-0.jpg"),
						name : "QueenJewelry",
						ranking : "9999",
						buy : "10000"
					},
					{
						url : require ("../images/5sOW5mHk-1.jpg"),
						name : "QueenJewelry",
						ranking : "9999",
						buy : "10000"
					},
					{
						url : require ("../images/5sOW5mHk-2.jpg"),
						name : "QueenJewelry",
						ranking : "9999",
						buy : "10000"
					},
					{
						url : require ("../images/5sOW5mHk-3.jpg"),
						name : "QueenJewelry",
						ranking : "9999",
						buy : "10000"
					},
					{
						url : require ("../images/5sOW5mHk-0.jpg"),
						name : "QueenJewelry",
						ranking : "9999",
						buy : "10000"
					},
					{
						url : require ("../images/5sOW5mHk-1.jpg"),
						name : "QueenJewelry",
						ranking : "9999",
						buy : "10000"
					},
					{
						url : require ("../images/5sOW5mHk-2.jpg"),
						name : "QueenJewelry",
						ranking : "9999",
						buy : "10000"
					},
					{
						url : require ("../images/5sOW5mHk-3.jpg"),
						name : "QueenJewelry",
						ranking : "9999",
						buy : "10000"
					},{
						url : require ("../images/5sOW5mHk-0.jpg"),
						name : "QueenJewelry",
						ranking : "9999",
						buy : "10000"
					},
					{
						url : require ("../images/5sOW5mHk-1.jpg"),
						name : "QueenJewelry",
						ranking : "9999",
						buy : "10000"
					},
					{
						url : require ("../images/5sOW5mHk-2.jpg"),
						name : "QueenJewelry",
						ranking : "9999",
						buy : "10000"
					},
					{
						url : require ("../images/5sOW5mHk-3.jpg"),
						name : "QueenJewelry",
						ranking : "9999",
						buy : "10000"
					}
				]
			}
		}
	}
</script>