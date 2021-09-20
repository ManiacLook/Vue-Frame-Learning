// 该文件用于创建vuex中的store
// 引入vuex
import Vuex from 'vuex'
import Vue from 'vue'
import countOptions from './count'
import personOptions from './person'
Vue.use(Vuex)

// 创建并暴露store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions,
    }
})
