<template>
	<div class="app">
		<h1>{{msg}} {{studentName}}</h1>
		<School :getSchoolName="getSchoolName"/>
		<!-- <Student v-on:atguigu="getStudentName" @demo="m1"/> -->
		<Student ref="student"/>
	</div>
</template>

<script>
	import School from './components/School'
	import Student from './components/Student'

	export default {
		name:'App',
		components:{School,Student},
		data() {
			return {
				msg:'你好',
				studentName:''
			}
		},
		methods:{
			getSchoolName(name){
				console.log(name)
			},
			getStudentName(name){
				console.log(name)
				this.studentName = name
			},
			m1(){
				console.log('demo')
			}
		},
		mounted(){
			this.$refs.student.$on('atguigu', this.getStudentName)
		}
	}
</script>

<style scoped>
	.app {
		background-color: gray;
	}
</style>
