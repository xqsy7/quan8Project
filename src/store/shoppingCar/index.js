import axios from "axios";
const state = {
    shoppingList:[],
    checkedAll:true,
};

const actions = {
    getCarsDataHandler(commit,value){
        axios({
            method:"post",
            url:"http://localhost:3000/shoppingList",
            data:{
                juanhou : value.juanhou,
                num : value.num,
                imgSrc : value.imgSrc,
                id : value.id,
                price: (value.num*value.juanhou).toFixed(2)
            }
        })
    },
    getMkDateHandler({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/shoppingList",
        }).then((data)=>{
             commit("getCarDataHandler",data);
        })
        
    }
};


const mutations = {
    getCarDataHandler(state,value){
        value.data.forEach((item,index)=>{
            item.checked = true
        })
        state.shoppingList = value.data;
    },
    addHandler(state,index){
        if(state.shoppingList[index].num>=99){
            state.shoppingList[index].num = 99;
        }else{
            state.shoppingList[index].num++;
            state.shoppingList[index].price = (state.shoppingList[index].num*state.shoppingList[index].juanhou).toFixed(2)
        }
    },
    reduceHandler(state,index){
        if(state.shoppingList[index].num<=1){
            state.shoppingList[index].num = 1;
        }else{
            state.shoppingList[index].num--;
            state.shoppingList[index].price = (state.shoppingList[index].num*state.shoppingList[index].juanhou).toFixed(2)
        }
    },
    // 单选
    checkedChangeHandler(state,index){
        state.shoppingList[index].checked = !state.shoppingList[index].checked;
        state.checkedAll = state.shoppingList.every((item,index)=>{
            return item.checked == true;
          })
          console.log(state.checkedAll)
    },
    // 全选
    checkedAllHandler(state){
        state.checkedAll = !state.checkedAll;
        state.shoppingList.forEach((item)=>{
            console.log(item)
            item.checked = state.checkedAll
        })
    }
};

const getters = {
    goodsSum(state){
        console.log(state.shoppingList);
        let goodsCount = 0,goodsSumPrice = 0;
        state.shoppingList.forEach((item)=>{
          if(item.checked == true){
            goodsCount += item.num;
            goodsSumPrice += (item.price * item.num)*100;
          }
        })
        return {
          goodsCount,
          goodsSumPrice
        }
      }
};


export default {
    state,
    actions,
    mutations,
    getters,
    namespaced:true
}