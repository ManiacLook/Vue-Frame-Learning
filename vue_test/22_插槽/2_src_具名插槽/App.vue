<template>
	<div class="container">
		<Category title="美食" >
			<img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt=""/>
			<a slot="footer" href="http://www.baidu.com">更多美食</a>
		</Category>

		<Category title="游戏" >
			<ul slot="center">
				<li v-for="(item,index) in games" :key="index">{{item}}</li>
			</ul>
			<div class="foot" slot="footer">
				<a slot="footer" href="http://www.baidu.com">单击</a>
				<a slot="footer" href="http://www.baidu.com">网</a>
			</div>
		</Category>

		<Category title="电影" >
			<video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
			<template v-slot:footer>
				<div class="foot">
					<a slot="footer" href="http://www.baidu.com">经典</a>
					<a slot="footer" href="http://www.baidu.com">热门</a>
				</div>
				<h4>欢迎观影</h4>
			</template>
		</Category>
	</div>
</template>

<script>
	import Category from './components/Category'
	export default {
		name:'App',
		components: {Category},
		data() {
			return {
				foods: ['火锅','烧烤','小龙虾'],
				games: ['红色警戒','穿越火线','劲舞团'],
				films: ['教父','拆弹专家','哈哈','呵呵']
			}
		}
	}
</script>

<style scoped>
	.container,.foot {
		display: flex;
		justify-content: space-around;
	}
	img{
        width: 100%;
    }
    video {
        width: 100%;
    }
	h4 {
		text-align: center;
	}
</style>