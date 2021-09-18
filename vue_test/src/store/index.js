// 该文件用于创建vuex中的store
// 引入vuex
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

// 用于响应组件中的动作
const actions = {}

// 用于操作数据
const mutations = {}

// 用于存储数据
const state = {}

// 创建并暴露store
const store = new Vuex.Store({
    actions,
    mutations,
    state,
})
