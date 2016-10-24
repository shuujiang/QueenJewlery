<style scoped lang="stylus">
.newarrival
	padding 50px 0 0 0
	overflow hidden
	.left
		float left
		position relative
		.shou
			position absolute
			top 0
			left 0
			z-index 1
			font-size 12px
			color white
			padding 5px 30px
			background-color rgb(121, 121, 121)
		.aLeft
			display block
			position relative
			width 875px
			height 250px
			background-repeat no-repeat
			box-shadow 2px 2px 2px 2px rgb(215, 215, 215)
			margin-bottom 20px
				
			p
				position absolute
				top 40px
				right 0
				width 200px
				height 70px
				text-align center
				font-size 50px
				font-weight 700
			span
				position absolute
				top 100px
				right 0
				width 200px
				height 30px
				text-align center
				border-bottom 1px solid rgb(215, 215, 215)
				&:after
					content "新宠"
					margin-left 15px
					font-size 14px
			.btn
				position absolute
				top 160px
				right 0
				width 250px
				height 40px
				background-image url("../images/u12.png")
				text-align center
				line-height 40px
				font-size 18px
				color white
			em
				position absolute
				top 210px
				right 0
				font-size 14px
				&:before
					content "距首发结束："
	.right
		float right
		.top
			width 278px
			height 266px
			border-top 3px solid 
			border-right 1px solid rgb(242, 242, 242)
			border-bottom 1px solid rgb(242, 242, 242)
			border-left 1px solid rgb(242, 242, 242)
			p
				width 240px
				margin-left 20px
				font-size 14px
				margin-top 10px
				&.p1
					margin-top 15px
					
				&.p2
					border-bottom 1px solid rgb(215, 215, 215)
					padding-bottom 20px
				
					
			h5
				padding-top 20px
				width 240px
				margin-left 20px
				font-weight 100
				font-size 20px
		.bottom
			width 280px
			border-top 3px solid 
			.tj
				width 240px
				font-size 14px
				margin-top 15px
				margin-left 20px
			.center
				position relative
				margin-top 25px
				border-bottom 1px solid rgb(242, 242, 242)
				
				.logo
					width 240px
					position absolute
					top 20px
					left 20px
					font-size 25px
					font-weight 700
				a
					p
						width 260px
						margin-top 20px
						margin-bottom 15px
						margin-left 10px
						font-size 14px
				.money
					margin-right 5px
					margin-left 10px
					font-weight 700
				em
					margin-left 10px
					&:before
							content ""
							display inline-block
							width 21px
							height 21px
							background-image url(../images/icon.png)
							vertical-align middle
						&.rank
							&:before
								background-position 0 -66px
						&.zhan
							&:before
								background-position 0 -88px
						&.pl
							&:before
								background-position 0 -110px
				.btn
					width 260px
					height 40px
					color white
					font-size 12px
					text-align center
					line-height 40px
					background-color rgb(134, 134, 134)
					margin-top 10px
					margin-bottom 35px
				
</style>
<template>
	<div class="newarrival w1180">
	<div class="left">
		<a class="shou">今日首发</a>
		<a class="aLeft" :href="item.href" v-for="item of arrLeft" :style="{'background-image':'url(' + item.url + ')'}">
			<p>{{item.logo}}</p>
			<span>{{item.name}}</span>
			<div class="btn">我要代言</div>
			<em>{{item.time}}</em>
		</a>
	</div>
	<div class="right">
		<div class="top">
			<p class="p1">女王宣言</p>
			<h5>我是女王我做主！</h5>
			<p class="p2">我是女王我做主，我是女王我做主，我是女王我做主，我是女王我做主，</p>
			<h5>我的品牌我代言！</h5>
			<p class="p3">我是女王我做主，我是女王我做主，我是女王我做主，我是女王我做主，</p>
		</div>
		<div class="bottom">
			<p class="tj">爆款推荐</p>
			<div class="center" v-for="item of arrRight">
				<span class="logo">{{item.logo}}</span>
				<a href="">
					<img :src="item.src" />
					<p>{{item.jieshao}}</p>
				</a>
				<span class="money">{{item.money}}</span>
				<em class="rank">{{item.ranking}}</em>
				<em class="zhan">{{item.zhan}}</em>
				<em class="pinglun">{{item.pinglun}}</em>
				<div class="btn">马上购买</div>
			</div>

		</div>
	</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				arrLeft : [
					{
						logo : "logo",
						name : "Queen Jewelry",
						time : "12天12时12分12秒",
						href : "",
						url : require("../images/5lpk6BEG-0.jpg")
					},
					{
						logo : "logo",
						name : "Queen Jewelry",
						time : "12天12时12分12秒",
						href : "",
						url : require("../images/5lpk6BEG-1.jpg")
					},
					{
						logo : "logo",
						name : "Queen Jewelry",
						time : "12天12时12分12秒",
						href : "",
						url : require("../images/5lpk6BEG-2.jpg")
					},
					{
						logo : "logo",
						name : "Queen Jewelry",
						time : "12天12时12分12秒",
						href : "",
						url : require("../images/5lpk6BEG-3.jpg")
					},
					{
						logo : "logo",
						name : "Queen Jewelry",
						time : "12天12时12分12秒",
						href : "",
						url : require("../images/5lpk6BEG-4.jpg")
					},
					{
						logo : "logo",
						name : "Queen Jewelry",
						time : "12天12时12分12秒",
						href : "",
						url : require("../images/5lpk6BEG-0.jpg")
					},
					{
						logo : "logo",
						name : "Queen Jewelry",
						time : "12天12时12分12秒",
						href : "",
						url : require("../images/5lpk6BEG-1.jpg")
					},
					{
						logo : "logo",
						name : "Queen Jewelry",
						time : "12天12时12分12秒",
						href : "",
						url : require("../images/5lpk6BEG-5.jpg")
					},
					{
						logo : "logo",
						name : "Queen Jewelry",
						time : "12天12时12分12秒",
						href : "",
						url : require("../images/5lpk6BEG-3.jpg")
					},
					{
						logo : "logo",
						name : "Queen Jewelry",
						time : "12天12时12分12秒",
						href : "",
						url : require("../images/5lpk6BEG-4.jpg")
					},
					{
						logo : "logo",
						name : "Queen Jewelry",
						time : "12天12时12分12秒",
						href : "",
						url : require("../images/5lpk6BEG-2.jpg")
					}
				],
				arrRight : [
					{
						logo : "logo",
						src : require("../images/6TKm6BEG-0.jpg"),
						jieshao : "某某系列珠宝首饰,采用设计平凡设计理念打造平凡时尚",
						money : "￥999.00",
						ranking : "999",
						zhan : "99",
						pinglun : "99"
					},
					{
						logo : "logo",
						src : require("../images/6TKm6BEG-1.jpg"),
						jieshao : "某某系列珠宝首饰,采用设计平凡设计理念打造平凡时尚",
						money : "￥999.00",
						ranking : "999",
						zhan : "99",
						pinglun : "99"
					},
					{
						logo : "logo",
						src : require("../images/6TKm6BEG-2.jpg"),
						jieshao : "某某系列珠宝首饰,采用设计平凡设计理念打造平凡时尚",
						money : "￥999.00",
						ranking : "999",
						zhan : "99",
						pinglun : "99"
					},
					{
						logo : "logo",
						src : require("../images/6TKm6BEG-3.jpg"),
						jieshao : "某某系列珠宝首饰,采用设计平凡设计理念打造平凡时尚",
						money : "￥999.00",
						ranking : "999",
						zhan : "99",
						pinglun : "99"
					},
					{
						logo : "logo",
						src : require("../images/6TKm6BEG-4.jpg"),
						jieshao : "某某系列珠宝首饰,采用设计平凡设计理念打造平凡时尚",
						money : "￥999.00",
						ranking : "999",
						zhan : "99",
						pinglun : "99"
					}
				]
			}
		}
	}
</script>