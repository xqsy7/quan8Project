<template>
  <div class="content">
    <div class="goods" v-for="(item,index) in shoppingList" :key="index">
      <label>
        <input type="checkbox" @click="checkedHandler(index)" :checked="item.checked"/>
      </label>
      <div class="goodsImg">
        <img :src="item.imgSrc"
          alt
        />
      </div>
      <p class="goodsPrice">{{item.juanhou}}</p>
      <div class="num">
        <button @click="clickReduceHandler(index)">-</button>
        <input type="text" :value="item.num"/>
        <button @click="clickAddHandler(index)">+</button>
      </div>
      <p class="Subtotal">￥{{item.price}}</p>
      <p class="operation">删除</p>
    </div>
  </div>
</template>

<script>
import { mapState,mapMutations,mapActions} from "vuex";
export default {
  name: "Center",
  activated(){
    this.getMkDateHandler();
  },
  computed: {
    ...mapState({
      shoppingList: state => state.ShoppingCar.shoppingList
    })
  },
  methods:{
    ...mapMutations({
      addHandler:"ShoppingCar/addHandler",
      reduceHandler:"ShoppingCar/reduceHandler",
      checkedChangeHandler:"ShoppingCar/checkedChangeHandler"
    }),
    ...mapActions({
      getMkDateHandler:"ShoppingCar/getMkDateHandler",
    }),
    clickReduceHandler(index){
      this.reduceHandler(index);
    },
    clickAddHandler(index){
      this.addHandler(index);
    },
    checkedHandler(index){
      this.checkedChangeHandler(index)
    }
  }
};
</script>
<style>
  .goods {
    width: 100%;
    display: flex;
    height: 107px;
    align-items: center;
    background: #fff;
  }
  .goods > label {
    width: 118px;
    text-align: center;
  }
  .goods > .goodsPrice {
    width: 2.4rem;
    text-align: center;
  }
  .goods > .num {
    /* overflow: hidden; */
    display: flex;
  }
  .goods > .num > button {
    width: .3rem;
    height: .3rem;
    border: 0;
  }
  .goods > .num > input {
    width: 40px;
    height: .3rem;
  }

  .goods > .Subtotal {
    width: 2rem;
    margin-left: .2rem;
  }

  .goods > .operation {
    width: 1.6rem;
    text-align: center;
  }
  img{
    width:80px;
    height: 80px;
  }
</style>