import Bscroll from "./bscroll/index.vue";
const components = [
    Bscroll
]


const install = (Vue)=>{
    if(Vue){
        components.map(item=>{
            Vue.component(item.name,item);
        })
    }
}

export default install;