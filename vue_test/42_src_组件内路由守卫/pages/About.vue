<template>
  <h2>我是About的内容</h2>
</template>

<script>
    export default {
        name:'About',
        // 通过路由规则，进入该组件时被调用
        beforeRouteEnter(to, from, next) {
              if (to.meta.isAuth){ // 判断是否需要鉴定权限
                  if (localStorage.getItem('school') === 'atguigu'){
                      next()
                  } else {
                      alert('权限不足')
                  }
              } else {
                  next()
              }
        },
        // 通过路由规则，离开该组件时被调用
        beforeRouteLeave(to, from, next) {
          next()
        },
    }
</script>