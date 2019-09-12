import Vue from "vue"
import Vuex from "vuex";
import ShoppingCar from "./shoppingCar"
import City from "./city";
import details from "./details";
Vue.use(Vuex);


const store = new Vuex.Store({
    modules:{
        ShoppingCar,
        City,
        details
    }
})


export default store;