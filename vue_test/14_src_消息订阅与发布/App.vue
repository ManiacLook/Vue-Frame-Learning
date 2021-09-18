<template>
	<div class="app">
		<h1>{{msg}}</h1>
		<School/>
		<Student/>
	</div>
</template>

<script>
	import School from './components/School'
	import Student from './components/Student'

	export default {
		name:'App',
		components:{School, Student},
		data() {
			return {
				msg:'你好',
			}
		},
	}
</script>

<style scoped>
	.app {
		background-color: gray;
	}
</style>
