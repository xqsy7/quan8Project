export default {
    path:"/details/:goodsId/:juanhou/:yuanjia/:xiaoliang",
    name:"details",
    meta:{
        flag:false
    },
    props:true,
    component:()=>import("@pages/details")
}