const actions = {};


const state = {
    list:[]
};


const mutations = {
    getDataHandler(state,value){
        console.log(value);
    }
};


const getters = {};



export default {
    actions,
    state,
    mutations,
    getters,
    namespaced:true,
}