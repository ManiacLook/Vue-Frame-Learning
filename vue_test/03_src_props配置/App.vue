<template>
	<div>
		<Student name="look" sex="男" :age="23"/>
	</div>
</template>

<script>
	import Student from './components/Student.vue'

	export default {
		name:'App',
		components:{
			Student,
		},
	}
</script>
