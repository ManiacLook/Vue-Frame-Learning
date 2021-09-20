// 该文件用于创建vuex中的store
// 引入vuex
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

// 用于响应组件中的动作
const actions = {
    jia(context,value){
        context.commit('JIA',value)
    },
    jian(context,value){
        context.commit('JIAN',value)
    },
    jiaOdd(context,value){
        if (context.state.sum % 2){
            context.commit('JIA',value)
        }
    },
    jiaWait(context,value){
        setTimeout(() =>{
            context.commit('JIA',value)
        },500)
    },
}

// 用于操作数据
const mutations = {
    JIA(state,value){
        state.sum += value
    },
    JIAN(state,value){
        state.sum -= value
    },
}

// 用于存储数据
const state = {
    sum:0,
    school:'武理',
    subject:'电信'
}

// 用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})
