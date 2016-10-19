<style scoped lang="stylus">
	.top
		height 30px
		line-height 30px
		background-color rgb(242, 242, 242)
		span
			float left
			line-height 30px
		.right
			float right
			line-height 30px
			a
				font-size 14px
				padding 0 10px
	.conent
		height 110px
		.logo
			float left
			font-size 34px
			font-weight 700
			line-height 110px
		.dz
			position relative
			margin-top 45px
			margin-left 10px
			float left
			.gd
				width 60px
				height 20px
				&:after
					content ""
					display inline-block
					width 20px
					height @width
					background-image url(../images/icon1.png)
					background-position 0 2px
				&:hover
					.fixedBox
						display block
			.fixedBox
				position absolute
				width 380px
				height 90px
				border 1px solid rgb(228, 228, 228)
				background-color white
				padding 20px 10px
				display none
				z-index 2
				div
					margin-bottom 10px
					font-size 14px
					span
						padding 0 3px
					a
						padding 0 2px
				
		.search
			margin-top 35px
			margin-left 160px
			float left
			.ipt-txt
				float left
				width 506px
				height 38px
				border 1px solid rgb(228, 228, 228)
			.btn
				float left
				width 38px
				height 38px
				background-image url(../images/icon1.png)
				background-position 9px -35px
				background-repeat no-repeat
				border 1px solid rgb(228, 228, 228)
		.shoushi
			position relative
			float left
			margin-top 35px
			margin-left 20px
			line-height 38px
			font-size 14px
			.ss
				text-align center
				display inline-block
				width 126px
				height 38px
				border 1px solid rgb(228, 228, 228)	
				&:after
					content ""
					display inline-block
					width 20px
					height @width
					background-image url(../images/icon1.png)
					background-position 0 -15px
				&:hover + .Fb
					display block
			.Fb
				display none
				position absolute
				top 39px
				left 50%
				transform translateX(-50%)
				.hr
					width 318px
					height 33px
					text-align center
					line-height 33px
					border 1px solid rgb(188, 188, 188)
					background-color rgb(242, 242, 242)
				.fr
					width 278px
					height 131px
					padding 0 20px
					border-right 1px solid rgb(188, 188, 188)
					border-bottom 1px solid rgb(188, 188, 188)
					border-left 1px solid rgb(188, 188, 188)
					background-color white
					.fr1
						height 75px
						border-bottom 1px solid
						a
							margin-top 10px
							float left
							border 1px solid rgb(215, 215, 215)
							img
								
								width 50px
								height @width
						p
							float left
							width 100px
							height 50px
							margin-top 20px
							margin-left 15px
						.money
							float left
							font-weight 700
							margin-top 20px
							margin-left 35px
							&:after
								content "×4"
								font-size 12px
								font-weight 400
								letter-spacing -3px
						.shan
							float left
							margin-top 5px
							margin-left 80px
					.fr2
						padding 10px
						p
							float left
							width 150px
							margin-bottom 5px
						.chakan
							padding 10px 15px
							float left
							background-color rgb(242, 242, 242)
		.wx
			float left
			width 70px
			height 90px
			margin-top 15px
			margin-left 80px
			text-align center
			line-height 160px
			background-image url(../images/u15.jpg)
			background-size 70px 70px
			background-repeat no-repeat
</style>
<template>
	<div class="header">
		<div class="top">
			<div class="w1180">
				<span>热线电话：12345678912</span>
				<div class="right">
					<a href="`">12345678912</a>
					<em>|</em>
					<a href="">退出</a>
					<em>|</em>
					<a href="">品牌商</a>
					<em>|</em>
					<a href="">女王帮助</a>
				</div>
			</div>
		</div>
		<div class="conent">
			<div class="w1180">
				<span class="logo">LOGO</span>
				<div class="dz">
					<div class="gd">
						<span class="aa">{{aa}}</span>
					<div class="fixedBox">
						<div v-for="item of arrChengshi">
							<span>{{item.name}}</span>
							<a v-for="index of item.arrShi" @click="handleClick(index.name)">{{index.name}}</a>
						</div>
					</div>
				</div>
				</div>
				<div class="search">
					<input class="ipt-txt" />
					<input class="btn" type="botton"/>
				</div>
				<div class="shoushi">
					<a class="ss" href="">我的首饰盒</a>
					<div class="Fb">
						<div class="hr">
							<span>最新加入的商品</span>
							<em>清空首饰盒</em>
						</div>
						<div class="fr">
							<div class="fr1">
								<a href=""><img src="../images/u204.jpg" /></a>
								<p>Life·After Life QueenJewelry</p>
								<span class="money">￥139.00</span>
								<span class="shan" href="">删除</span>
							</div>
							<div class="fr2">
								<p>
									<span>共4件商品</span>
								<span>共计：￥556.00</span>
								</p>
								<a class="chakan" href="">查看首饰盒</a>
							</div>
						</div>
					</div>
				</div>
				<div class="wx">关注微信</div>

			</div>
		</div>
	</div>
</template>
<script>
	let aa = "北京";
	export default{
		data(){
			return{
				arrChengshi	: [
					{
						name : "A-G",
						arrShi : [
							{
								name : "北京"
							},
							{
								name : "安徽"
							},
							{
								name : "重庆"
							},
							{
								name : "福建"
							},
							{
								name : "广东"
							},
							{
								name : "广西"
							},
							{
								name : "甘肃"
							},
							{
								name : "贵州"
							}
						]
					},
					{
						name : "H-J",
						arrShi : [
							{
								name : "河北"
							},
							{
								name : "河南"
							},
							{
								name : "海南"
							},
							{
								name : "湖北"
							},
							{
								name : "湖南"
							},
							{
								name : "黑龙江"
							},
							{
								name : "吉林"
							},
							{
								name : "江苏"
							},
							{
								name : "江西"
							}
						]
					},
					{
						name : "L-S",
						arrShi : [
							{
								name : "辽宁"
							},
							{
								name : "内蒙古"
							},
							{
								name : "宁夏"
							},
							{
								name : "青海"
							},
							{
								name : "上海"
							},
							{
								name : "四川"
							},
							{
								name : "山东"
							},
							{
								name : "山西"
							},
							{
								name : "陕西"
							}
						]
					},
					{
						name : "T-Z",
						arrShi : [
							{
								name : "天津"
							},
							{
								name : "安徽"
							},
							{
								name : "新疆"
							},
							{
								name : "西藏"
							},
							{
								name : "云南"
							},
							{
								name : "浙江"
							}
						]
					}
				],
				aa 
			};
		},
		methods : {
			handleClick(index){
			
			}
		}
	}
		console.log(aa)	
</script>