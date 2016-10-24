<style scoped lang="stylus">
.barand
	overflow hidden
	margin-top 50px
	.left
		float left
		width 220px
		a
			display block
			width 220px
			height 330px
			background-color rgb(94, 94, 94)
			margin-bottom 20px
			p
				width 220px
				height 80px
				text-align center
				color white
				font-size 45px
				font-weight 700
				padding-top 100px
			span
				color white
				font-size 22px
				font-weight 700
				margin-top 50px
				margin-left 60px
	.right
		float left
		width 960px
		.item
			width 960px
			height 330px
			margin-bottom 20px
			overflow hidden
			.top
				width 940px
				height 38px
				margin-left 20px
				border-bottom 2px solid
				span
					position relative
					float right
					font-size 14px
					padding 5px 15px
					margin-right 15px
					background-color rgb(121, 121, 121)
					&:after
						color white
						text-align center
						content "》"
						font-size 12px
						position absolute
						top 0
						left 81px
						width 24px
						height 24px
						line-height 24px
						background-color rgb(161, 161, 161)	
			.index
				float left
				width 218px
				height 289px
				margin-left 20px
				border-right 1px solid rgb(215, 215, 215)
				border-bottom 1px solid rgb(215, 215, 215)
				border-left 1px solid rgb(215, 215, 215)
				img
					width 218px
					margin-bottom 5px
				span
					font-size 18px
					margin-right 40px
					margin-left 10px
				em
					display inline-block
					margin-top 10px
					margin-right 10px
					color rgb(134, 134, 134)
					&:before
						content ""
						display inline-block
						width 21px
						height 21px
						background-image url(../images/icon.png)
						vertical-align middle
					&.rank
						margin-left 40px
						&:before
							background-position 0 -66px
					&.zhan
						&:before
							background-position 0 -88px
					&.pl
						&:before
							background-position 0 -110px
</style>
<template>
	<div class="barand w1180">
		<div class="left">
			<a v-for="item of arrLogo" :href="item.href">
				<p>{{item.logo}}</p>
				<span>{{item.name}}</span>
			</a>
		</div>
		<div class="right">
			
			<div class="item" v-for="item of arrgenduo">
				<div class="top">
					<span>了解更多</span>
				</div>
				<a href="">
					<div class="index" v-for="index of item.arrgenduo1">
						<img :src="index.src" />
						<span>{{index.name}}</span>
						<i>{{index.money}}</i>
						<em class="rank">{{index.ranking}}</em>
						<em class="zhan">{{index.zhan}}</em>
						<em class="pl">{{index.pinglun}}</em>
					</div>
				</a>
				
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				arrLogo : [
					{
						name : "女王珠宝",
						logo : "LOGO",
						href : ""
					},
					{
						name : "女王珠宝",
						logo : "LOGO",
						href : ""
					},
					{
						name : "女王珠宝",
						logo : "LOGO",
						href : ""
					},
					{
						name : "女王珠宝",
						logo : "LOGO",
						href : ""
					},
					{
						name : "女王珠宝",
						logo : "LOGO",
						href : ""
					},
					{
						name : "女王珠宝",
						logo : "LOGO",
						href : ""
					},
					{
						name : "女王珠宝",
						logo : "LOGO",
						href : ""
					},
					{
						name : "女王珠宝",
						logo : "LOGO",
						href : ""
					},
					{
						name : "女王珠宝",
						logo : "LOGO",
						href : ""
					},
					{
						name : "女王珠宝",
						logo : "LOGO",
						href : ""
					}
				],
				arrgenduo : [
					{
						arrgenduo1 : [
							{
								src : require("../images/u204.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u22.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u30.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u38.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							}
						]
					},
					{
						arrgenduo1 : [
							{
								src : require("../images/u204.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u22.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u30.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u38.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							}
						]
					},
					{
						arrgenduo1 : [
							{
								src : require("../images/u204.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u22.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u30.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u38.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							}
						]
					},
					{
						arrgenduo1 : [
							{
								src : require("../images/u204.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u22.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u30.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u38.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							}
						]
					},
					{
						arrgenduo1 : [
							{
								src : require("../images/u204.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u22.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u30.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u38.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							}
						]
					},
					{
						arrgenduo1 : [
							{
								src : require("../images/u204.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u22.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u30.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u38.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							}
						]
					},
					{
						arrgenduo1 : [
							{
								src : require("../images/u204.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u22.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u30.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u38.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							}
						]
					},
					{
						arrgenduo1 : [
							{
								src : require("../images/u204.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u22.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u30.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u38.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							}
						]
					},
					{
						arrgenduo1 : [
							{
								src : require("../images/u204.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u22.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u30.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u38.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							}
						]
					},
					{
						arrgenduo1 : [
							{
								src : require("../images/u204.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u22.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u30.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							},
							{
								src : require("../images/product_u38.jpg"),
								name : "QueenJewelry",
								money : "￥99",
								ranking : "999",
								zhan : "99",
								pinglun : "99"
							}
						]
					}
				]
			}
		}
	}
</script>