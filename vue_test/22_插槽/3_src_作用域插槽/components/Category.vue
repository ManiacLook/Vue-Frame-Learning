<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot :games="games"></slot>
    </div>
</template>

<script>
    export default {
        name:'Category',
        props:['listData', 'title'],
        data() {
			return {
				foods: ['火锅','烧烤','小龙虾'],
				games: ['红色警戒','穿越火线','劲舞团'],
				films: ['教父','拆弹专家','哈哈','呵呵']
			}
		}
    }
</script>

<style>
    .category {
        background-color:skyblue;
        width: 200px;
        height: 300px;
    }
    h3 {
        text-align:center;
        background-color: orange;
    }
</style>