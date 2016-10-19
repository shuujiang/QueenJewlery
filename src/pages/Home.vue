<style scoped lang="stylus">
	.title
		margin 25px 0 15px
		height 50px
		h2
			float left
			width 200px
			height 50px
			line-height @height
			
		.add
			float right
			width 50px
			height @width
			border-radius 50%
			background-color rgb(242, 242, 242)
			text-align center
			line-height 45px
			font-size 30px
			font-weight 900
			color rgb(188, 188, 188)
	i
		display inline-block
		width 21px
		height 21px
		background-image url(../images/icon.png)
	.home
		.banner
			width 100%
			height 350px
		.top
			height 572px
			ul
				li
					width 220px
					height 241px
					float left
					margin-right 20px
					&:nth-of-type(5n)
						margin-right 0
					img
						width 200px
						height @width
					em
						line-height 21px
						
					i
						vertical-align middle
						margin 0 12px 0 16px
					span
						font-size 12px
		.shoufa
			.shoufa1
				margin-bottom 30px
				position relative
				width 1180px
				height 340px
				.logo
					position absolute
					top 40px
					left 30px
					font-size 24px
					color white
					font-weight 700
				p
					position absolute
					top 20px
					right 20px
					width 400px
					height 30px
					background-color rgb(107, 107, 107)
					text-align center
					line-height 30px
					font-size 12px
					color white
				.white
					position absolute
					top 50px
					right 20px
					width 400px
					height 272px
					background-color white
					img
						width 180px
						height @width
						padding 40px 20px 50px 20px
					.name
						position absolute
						top 40px
						left 240px
						font-size 18px
						font-weight 700
						&:before
							content "代言人："
							font-size 14px
					.ad
						position absolute
						top 90px
						left 240px
						display inline-block
						width 130px
						height 36px
						font-size 14px
						line-height 18px
					
						&.i1
							background-position 0 -22px
							position absolute
							top 155px
							left 240px
						&.i2
							background-position 0 -44px
							position absolute
							top 155px
							left 265px
					.btn
						width 100px
						height 30px
						background-color rgb(81, 81, 81)
						color white
						text-align center
						line-height 30px
						position absolute
						top 155px
						left 300px
					.rank
						position absolute
						top 210px
						left 240px
						&:after
							content "人喜欢"
							font-size 14px
							line-height 16px
					.buy
						position absolute
						top 230px
						left 240px
						&:after
							content "已经购买"
							font-size 14px
							line-height 16px
		.daiyan
			height 490px
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
		.shishang
			height 345px
			.shang
				height 255px
				.icon
					float left
					width 380px
					height @height
					margin-right 20px
					&:nth-of-type(3)
						margin-right 0
					.p1
						width 380px
						font-size 20px
						margin-bottom 30px
					img
						float left
						width 180px
						height 162px
						margin-right 20px
					.p2
						float left
						width 175px
						height 162px
						font-size 14px
						line-height 24px
					span
						float left
						margin-top 25px
						margin-right 10px
					em
						float left
						
						margin-top 25px
						margin-right 10px
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
								

</style>
<template>
	<div class="home">
		<banner :data="arrBanner"></banner>
		<div class="top w1180">
			<div class="title">
				<h2>女王人气Top 10</h2>
				<div class="add">+</div>
			</div>
			<ul>
				<li v-for="item of list"><img :src="item.imageUrl"/><em>{{item.name}}</em><i></i><span>{{item.ranking}}</span></li>
			</ul>
		</div>
		<div class="shoufa w1180">
			<div class="title">
				<h2>首发品牌</h2>
				<div class="add">+</div>
			</div>
			<div class="shoufa1" v-for="index of logo" >
				<img class="beijing" :src="index.url" />
				<span class="logo">{{index.logo}}</span>
				<p>{{index.time}}</p>
				<div class="white">
					<img :src="index.imageUrl" />
					<span class="name">{{index.name}}</span>
					<span class="ad">{{index.ad}}</span>
					<i class="i1"></i>
					<i class="i2"></i>
					<div class="btn">立刻购买</div>
					<span class="rank">{{index.ranking}}</span>
					<span class="buy">{{index.buy}}</span>
				</div>
			</div>
		</div>
		<div class="daiyan w1180">
			<div class="title">
				<h2>为我代言</h2>
				<div class="add">+</div>
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
		<div class="shishang w1180">
			<div class="title">
				<h2>我的时尚</h2>
				<div class="add">+</div>
			</div>
			<div class="shang">
				<div class="icon" v-for="item of shishang">
					<p class="p1">{{item.biaoti}}</p>
					<img :src="item.url" />
					<p class="p2">{{item.maishu}}</p>
					<span>{{item.name}}</span>
					<span>{{item.riqi}}</span>
					<em class="rank">{{item.ranking}}</em>
					<em class="zhan">{{item.zhan}}</em>
					<em class="pl">{{item.pinglun}}</em>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Banner from "../components/Banner"
	export default {
		data(){
			return{
				arrBanner : [
					{
						name : "1",
						src : require("../images/u28_state0.jpg")
					},
					{
						name : "2",
						src : require("../images/u28_state1.jpg")
					},
					{
						name : "3",
						src : require("../images/u28_state2.jpg")
					},
					{
						name : "4",
						src : require("../images/u28_state3.jpg")
					}
				],
				list : [
					{
						name : "Queenjewerlry",
						imageUrl :require ("../images/5ayl5mHk-0.png"),
						ranking : "999"
					},
					{
						name : "Queenjewerlry",
						imageUrl : require ("../images/5ayl5mHk-1.png"),
						ranking : "999"
					},
					{
						name : "Queenjewerlry",
						imageUrl : require ("../images/5ayl5mHk-2.png"),
						ranking : "999"
					},
					{
						name : "Queenjewerlry",
						imageUrl : require ("../images/5ayl5mHk-3.png"),
						ranking : "999"
					},
					{
						name : "Queenjewerlry",
						imageUrl : require ("../images/5ayl5mHk-4.png"),
						ranking : "999"
					},
					{
						name : "Queenjewerlry",
						imageUrl : require ("../images/5ayl5mHk-5.png"),
						ranking : "999"
					},
					{
						name : "Queenjewerlry",
						imageUrl : require ("../images/5ayl5mHk-6.png"),
						ranking : "999"
					},
					{
						name : "Queenjewerlry",
						imageUrl : require ("../images/5ayl5mHk-7.png"),
						ranking : "999"
					},
					{
						name : "Queenjewerlry",
						imageUrl : require ("../images/5ayl5mHk-8.png"),
						ranking : "999"
					},
					{
						name : "Queenjewerlry",
						imageUrl : require ("../images/5ayl5mHk-9.png"),
						ranking : "999"
					}
				],
				logo : [
					{
						logo : "LOGO",
						url : require ("../images/5zcX5mHk-0.jpg"),
						imageUrl :require ("../images/5ayl5mHk-1.png"),
						time : "距首发结束:20天18时18分18秒",
						name : " Queen",
						ad : "拒绝平庸，追求卓越 凸显个性，绝不将就",
						ranking : "9999",
						buy : "10000"
					},
					{
						logo : "LOGO",
						url : require ("../images/5zcX5mHk-2.jpg"),
						imageUrl :require ("../images/5ayl5mHk-8.png"),
						time : "距首发结束:20天18时18分18秒",
						name : " Queen",
						ad : "拒绝平庸，追求卓越 凸显个性，绝不将就",
						ranking : "9999",
						buy : "10000"
					},
					{
						logo : "LOGO",
						url : require ("../images/5zcX5mHk-4.jpg"),
						imageUrl :require ("../images/5ayl5mHk-6.png"),
						time : "距首发结束:20天18时18分18秒",
						name : " Queen",
						ad : "拒绝平庸，追求卓越 凸显个性，绝不将就",
						ranking : "9999",
						buy : "10000"
					}
				],
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
					}
				],
				shishang : [
					{
						biaoti : "2015春夏流行色：魅惑黑色",
						url : require ("../images/6Ezw5mHk-0.jpg"),
						maishu : "黑色之所以经久不衰,小编猜应该有不少原因,不过肯定逃不脱穿腻了夏日缤纷色彩的心理,不妨从一周中抽出一天来,穿上黑寡妇斯嘉丽最爱的AllBlack造型,这种帅气简单,也能让别人眼前一亮。",
						name : "Queen",
						riqi : "2015-06-02",
						ranking : "999",
						zhan : "99",
						pinglun : "99"
					},
					{
						biaoti : "2015春夏流行色：魅惑黑色",
						url : require ("../images/6Ezw5mHk-0.jpg"),
						maishu : "黑色之所以经久不衰,小编猜应该有不少原因,不过肯定逃不脱穿腻了夏日缤纷色彩的心理,不妨从一周中抽出一天来,穿上黑寡妇斯嘉丽最爱的AllBlack造型,这种帅气简单,也能让别人眼前一亮。",
						name : "Queen",
						riqi : "2015-06-02",
						ranking : "999",
						zhan : "99",
						pinglun : "99"
					},
					{
						biaoti : "2015春夏流行色：魅惑黑色",
						url : require ("../images/6Ezw5mHk-0.jpg"),
						maishu : "黑色之所以经久不衰,小编猜应该有不少原因,不过肯定逃不脱穿腻了夏日缤纷色彩的心理,不妨从一周中抽出一天来,穿上黑寡妇斯嘉丽最爱的AllBlack造型,这种帅气简单,也能让别人眼前一亮。",
						name : "Queen",
						riqi : "2015-06-02",
						ranking : "999",
						zhan : "99",
						pinglun : "99"
					}
				]
			};
		},
		components : {
			Banner
		}
	};
</script>