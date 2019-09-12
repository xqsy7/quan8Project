<template>
  <div class="footer">
    <van-submit-bar
        :price="goodsSum.goodsSumPrice"
        button-text="提交订单"
        @submit="onSubmit"
        >
        <label class="checkCss">
            全选<input type="checkbox" class="checkAll" :checked="checkedAll" @click="clickHandler()">
        </label>
        <!-- <van-checkbox v-model="checked">全选</van-checkbox>
        <span slot="tip">
            你的收货地址不支持同城送, <span>修改地址</span>
        </span> -->
    </van-submit-bar>
  </div>
</template>

<script>
import {mapGetters,mapState,mapMutations} from "vuex";
import Vue from 'vue';
import { SubmitBar } from 'vant';

Vue.use(SubmitBar);
export default {
    name:"Bottom",
    components:{
        // [CheckBox.name]:"CheckBox",
    },
    data(){
        return {
            checked:"",
        }
    },
    computed:{
        ...mapState({
            checkedAll : state=>state.ShoppingCar.checkedAll
        }),
        ...mapGetters({
            goodsSum : "ShoppingCar/goodsSum"
        })
    },
    methods:{
        onSubmit(){

        },
        clickHandler(){
            this.checkedAllHandler()
        },
        ...mapMutations({
            checkedAllHandler:"ShoppingCar/checkedAllHandler"
        })
    }
    
};
</script>
<style>
.van-submit-bar{
    position: relative;
}
.checkCss{
    margin-left: 8px;
    color: #323233;
    font-weight: 500;
    text-align: right; 
}
.checkAll{
    float: left;
    color: #323233;
    font-weight: 500;
    text-align: right;
}
</style>