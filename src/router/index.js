import Vue from "vue";
import VueRouter from "vue-router";
import mine from "./mine";
import home from "./home";
import sort from "./sort";
import menu from "./menu";
import feedback from "./feedback";
import collection from "./collection";
import service from "./service";
import shoppingCar from "./shoppingCar"
import login from "./login"
import register from "./register"
import city from './city';
import seach from "./seach";
import details from "./details";
Vue.use(VueRouter);

const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:'/',
            redirect:"/home",
        },
        home,
        mine,
        sort,
        collection,
        menu,
        feedback,
        service,
        shoppingCar,
        login,
        register,
        city,
        seach,
        details
    ]
})
router.beforeEach((to,from,next)=>{
    next();
})
export default router;
