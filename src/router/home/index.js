export default {
    path:"/home",
    name:"Home",
    meta:{
        flag:true
    },
    // 路由懒加载
    component:()=>import("@pages/home"),
}