import { city } from "@api/city";
const state = {
    hotList:[],
    cityList:[]
};

const actions = {
    async getCityHandler({commit}){
        let data = await city();
        commit("getCityMutationsHandler",data);
    }
};


const mutations = {
    getCityMutationsHandler(state,params){
        /*
        cityList:[{index:A,list:[{name id}}]
        
        
        */
       let cityList = [];
        params.cts.forEach((item,ids)=>{
            let indexList = item.py.slice(0,1).toUpperCase();
            if(cityData(indexList)){
                for(var j=0;j<cityList.length;j++){
                        if(cityList[j].index == indexList){
                            cityList[j].list.push({nm:item.nm,id:item.id})   
                        }
                    }
            }else{
                cityList.push({index:indexList,list:[{nm:item.nm,id:item.id}]})
            }
        })
        function cityData(indexList){
            var flag = false;
            for(var i=0;i<cityList.length;i++){
                if(cityList[i].index ==indexList){
                    flag = true;
                    break;
                }
            }
            return flag;
        }

        cityList.sort((a,b)=>{
            if(a.index>b.index){
                return 1
            }else{
                return -1;
            }
        })
        state.cityList = cityList;
        
    }
    
};

const getters = {};


export default {
    state,
    actions,
    mutations,
    getters,
    namespaced:true
}