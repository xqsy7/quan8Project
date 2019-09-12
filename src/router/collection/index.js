export default {
    name:"Collection",
    path:"/collection",
    meta:{
        flag:true
    },
    // 按需加载引入===>路由的懒加载
    component:()=>import("@pages/collection"),
}