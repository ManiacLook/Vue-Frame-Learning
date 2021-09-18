/* 该文件是整个项目的入口文件 */
// 引入vue
import Vue from 'vue'
// 引入App组件——所有组件的父组件
import App from './App.vue'

Vue.config.productionTip = false
// 创建vue实例对象vm
new Vue({
  // 将App组件放入容器中
  render: h => h(App),
}).$mount('#app')
