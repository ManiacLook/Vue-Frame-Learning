// 人员管理相关的配置
export default {
    namespaced:true,
    actions:{
        addPersonWang(context,value){
            if (value.name.indexOf('王') === 0){
                context.commit('ADD_PERSON',value)
            }
        }
    },
    mutations:{
        ADD_PERSON(state,value){
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[
            {id:'001',name:'look'}
        ]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    },
}