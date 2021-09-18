<template>
    <div>
        <h2 @click="showName">学校姓名：{{name}}</h2>	
        <h2>学校地址{{address}}</h2>	
    </div>
</template>

<script>
    // import {hunhe, hunhe2} from '../mixin'
    export default{
        name:'Student',
        data(){
            return {
                name:'武理',
                address:'武汉'
            }
        },
        // mixins:[hunhe, hunhe2]
    }
</script>