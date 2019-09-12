<template>
    <div class="findProduct">
        <p class="findshop">发现好货</p>
        <Xu-Bscroll ref="scroll">
        <div class="productList">
            <ul>
                <router-link
                :to="'/details/'+item.goodsId+'/'+item.computedPrice+'/'+item.yuanjia+'/'+item.xiaoliang"
                tag="li"
                 v-for="(item,index) in shopLeftList" :key="index">
                    <a href="">
                        <div class="productList_img">
                            <img :src="item.pic" alt="">
                        </div>
                        <p class="productList_title">{{item.dtitle}}</p>
                        <div class="productList_group">
                            <span class="group">
                                <span class="quanJine">{{item.quanJine}}元卷</span>
                                <span class="fashionTag">
                                    {{item.fashionTag}}
                                </span>
                            </span>
                        </div>
                        <p class="productList_price">
                            卷后&nbsp;&nbsp;￥&nbsp;
                            <span>{{(item.computedPrice)}}</span>
                        </p>
                        <div class="productList_more">
                            <p>
                                <span>
                                    天猫 ¥
                                </span>
                                <span class="productList_money">
                                    {{item.yuanjia}}
                                </span>
                            </p>
                            <span>
                                <span>已售</span>
                                <span class="productList_money">
                                    {{item.xiaoliang}}万
                                </span>
                            </span>
                        </div>
                    </a>
                </router-link>
            </ul>


            <ul>
                <router-link 
                tag="li"
                
                v-for="(item,index) in shopRightList" :key="index"
                :to="'/details/'+item.goodsId+'/'+item.computedPrice+'/'+item.yuanjia+'/'+item.xiaoliang"
                >
                    <a href="">
                        <div class="productList_img">
                            <img :src="item.pic" alt="">
                        </div>
                        <p class="productList_title">{{item.dtitle}}</p>
                        <div class="productList_group">
                            <span class="group">
                                <span class="quanJine">{{item.quanJine}}元卷</span>
                                <span class="fashionTag">
                                    {{item.fashionTag}}
                                </span>
                            </span>
                        </div>
                        <p class="productList_price">
                            卷后&nbsp;&nbsp;￥&nbsp;
                            <span>{{item.computedPrice}}</span>
                        </p>
                        <div class="productList_more">
                            <p>
                                <span>
                                    天猫 ¥
                                </span>
                                <span class="productList_money">
                                    {{item.yuanjia}}
                                </span>
                            </p>
                            <span>
                                <span>已售</span>
                                <span class="productList_money">
                                    {{item.xiaoliang}}万
                                </span>
                            </span>
                        </div>
                    </a>
                </router-link>
            </ul>
        </div>
        </Xu-Bscroll>
    </div>
</template>

<script>
import {mapMutations} from "vuex";
import http from "@utils/http";
import {findProduct,findProductR} from "@api";

export default {
    name:"findProduct",
    data(){
        return {
            shopLeftList:[],
            shopRightList:[],
            num:"",
        }
    },
    async created(){
        let data = await findProduct();
            data.data.list.forEach((item)=>{
                    item.computedPrice = (item.yuanjia - item.quanJine).toFixed(2);
                })
        this.shopLeftList = data.data.list;
        console.log(data)

        let data1 = await findProductR();
        data1.data.list.forEach((item)=>{
                item.computedPrice = (item.yuanjia - item.quanJine).toFixed(2);
            })
        this.shopRightList = data1.data.list;
    },
    mounted(){
        this.$refs.scroll.pullingUpHandler(async ()=>{
            let data = await findProduct();
            data.data.list.forEach((item)=>{
                    item.computedPrice = (item.yuanjia - item.quanJine).toFixed(2);
                })
            if(data.msg == "成功"){
                this.shopLeftList = [...this.shopLeftList,...data.data.list];
                this.id++;
            }

            let data1 = await findProductR();
            data1.data.list.forEach((item)=>{
                    item.computedPrice = (item.yuanjia - item.quanJine).toFixed(2);
                })
            if(data1.msg == "成功"){
                this.shopRightList = [...this.shopRightList,...data1.data.list];
                this.id++;
            }
        })
        
    },
    activated() {

    },
    updated(){
   
    this.$refs.scroll.handlefinishPullUp();
  },
  methods:{
      clickHandler(index){
          
      },
      ...mapMutations({
      getDataHandler: "details/getDataHandler"
    })
  }
}
</script>

<style scoped>
.findProduct{
    position: relative;
    top: 7.3rem;
    height: 100%;
}
.findshop{
    margin: .5rem auto .1rem;
    width: 2.07rem;
    height: .42rem;
    font-size: .3rem;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    text-align: center;
    color: #333;
    line-height: .42rem;
    background: url("https://cmsstatic.dataoke.com/wap_new/home/images/find_product_bg.png?v=2019-09-06") center no-repeat;
    background-size: 2.07rem .12rem;
}

.productList{
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.productList ul{
    margin-right: .18rem;
}
.productList ul li{
    border-radius: .1rem;
    background: #fff;
    overflow: hidden;
    width: 3.5rem;
    margin-left: .2rem;
    margin-top: .2rem;
}
.productList_img{
    width: 3.4rem;
    border-radius: .1rem .1rem 0 0;
    background: #ccc;
}
.productList_img img{
    border-radius: .1rem .1rem 0 0;
    background: rgb(245, 245, 245);
    display: inline;
    vertical-align: middle;
    width: 3.4rem;
}
.productList_title{
    width: 3.14rem;
    font-size: .24rem;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #333;
    line-height: .34rem;
    margin: .08rem auto;
    overflow: hidden;
}
.group{
    margin: 0 .16rem;
    display: inline;
    flex-wrap: wrap;
    align-items: center;
}
.quanJine{
    border: 0;
    background: linear-gradient(90deg,#ff8873 0,#ff4f4f 100%);
    color: #FFF;
    height: .36rem;
    border-radius: .06rem;
    font-size: .1rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    line-height: .36rem;
    margin-right: .1rem;
    margin-bottom: .1rem;
    text-align: center;
    padding: 0 .08rem;
}
.fashionTag{
    height: .36rem;
    border-radius: .06rem;
    border: .02rem solid #ff9793;
    font-size: .2rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #ff3b32;
    line-height: .36rem;
    margin-right: .1rem;
    margin-bottom: .1rem;
    text-align: center;
    padding: 0 .04rem;
}
.productList_price{
    margin-left: .08rem;
    font-size: .1rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #ff3b32;
    line-height: .14rem;
}
.productList_price span{
    font-size: .18rem;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    line-height: .25rem;
}
.productList_more{
    margin: .05rem 0 .15rem .08rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: .1rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #999;
    line-height: .14rem;
}
.productList_money{
    margin-right: .15rem;
}

</style>