<template>
  <div class="details">
    <a href class="iconfont iconfont1" @tap="clickHandler()">&#xe6f3;</a>
    <div class="details-img">
      <van-swipe :autoplay="3000" indicator-color="white" class="details-imgBox">
        <van-swipe-item  v-for="(item,index) in imgList" :key="index">
        <img 
       
        :src="item.img"
        alt
      /></van-swipe-item>
      </van-swipe>
    </div>
    <div class="timeShop">
      <img
        src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN01FdvYSN2JJhyK1h957_!!2053469401.png"
        alt
      />
      <p class="text">5折好货限时抢</p>
      <div class="timeout">
        <span>距结束仅剩</span>
        <van-count-down :time="time" />
      </div>
    </div>
    <div class="goods-info">
      <h1 class="head">
        <span>天猫</span>
        新券！！泰国Mistine羽翼粉饼
      </h1>
      <div class="info">
        <div class="info-money">
          卷后价
          <span>￥{{juanhou}}</span>
        </div>
        <div class="text-right">
          已售{{xiaoliang}}
          <span>件</span>
        </div>
        <div class="oldPrice">天猫价￥{{yuanjia}}</div>
        <div class="text-right1">
          <span>包邮</span>
          <span>运费险</span>
        </div>
      </div>
    </div>
    <div class="foot">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon1" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
        <van-goods-action-button type="warning" text="加入购物车" @click="onClickIcon" />
        <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import Vue from "vue";
import { CountDown } from "vant";
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";
import {getData} from "@api";
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);

Vue.use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);

Vue.use(CountDown);
export default {
  name: "Details",
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      juanhou:"",
      yuanjia:"",
      xiaoliang:"",
      imgList:[],
    };
  },
//   activated() {
//       this.getDataHandler()
//   },
  methods: {
    ...mapActions({
      getCarsDataHandler:"ShoppingCar/getCarsDataHandler"
    }),
    onClickIcon() {
      var obj = {
        juanhou : this.juanhou,
        num : 1,
        imgSrc : this.imgList[0].img,
        id : this.$route.params.goodsId,
      }
      this.getCarsDataHandler(obj)
      this.$router.push("/shoppingcar")
    },
    onClickButton() {
      Toast("点击按钮");
    },
    onClickIcon1(){

    },
    clickHandler() {
      this.$router.back();
    },
    
  },
  async activated() {
    let {goodsId,juanhou,yuanjia,xiaoliang} = this.$route.params;
    this.yuanjia = yuanjia;
    this.juanhou = juanhou;
    this.xiaoliang = xiaoliang;
    let data = await getData(goodsId);
    this.imgList = JSON.parse(data.data);
  },
};
</script>

<style scoped>
.details {
  width: 100%;
  height: 100%;
}
.iconfont1 {
  font-size: 0.5rem;
  color: #cccccc;
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  z-index: 200;
}
.details-img {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.details-img img {
  width: 100%;
  height: 7.6rem;
}
.timeShop {
  background: url(https://img.alicdn.com/imgextra/i3/2053469401/O1CN01wzYMj22JJhyKYuZ5K_!!2053469401.png);
}
.timeShop img {
  float: left;
  margin-left: 0.4rem;
  height: 50px;
  margin-right: 0.4rem;
}
.text {
  line-height: 1rem;
  color: #ffffff;
  font-size: 0.3rem;
  margin-left: 2rem;
  height: 1rem;
}
.timeout {
  position: absolute;
  z-index: 0;
  zoom: 1;
  right: 0;
  text-align: center;
  top: 100%;
  font-size: 0.3rem;
  width: 120px;
  margin-top: -19px;
}
.goods-info {
  width: 100%;
  height: 100%;
}
.head {
  font-size: 0.3rem;
  font-weight: 400;
  padding: 0.3rem 0 0.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 0.4rem;
}
.head span {
  border: 1px solid #fc3f78;
  color: #fc3f78;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  -o-border-radius: 2px;
  -ms-border-radius: 2px;
  padding: 0 5px;
  margin-right: 5px;
  font-size: 0.2rem;
  top: -1px;
}
.info {
  width: 100%;
  height: 100%;
  margin-left: 0.4rem;
  margin-right: 0.1rem;
}
.info-money {
  float: left;
  width: 4rem;
  font-size: 0.2rem;
  height: 0.4rem;
  line-height: 0.4rem;
  color: #fc4d52;
}
.info-money span {
  font-size: 0.3rem;
}
.text-right {
  text-align: center;
  width: 3rem;
  float: right;
  font-size: 0.2rem;
  height: 0.4rem;
  line-height: 0.4rem;
  color: #666;
}
.text-right {
  color: #f72239;
}
.oldPrice {
  float: left;
  width: 2rem;
  font-size: 0.2rem;
  height: 0.4rem;
  line-height: 0.4rem;
  color: #888;
}
.text-right1 {
  text-align: center;

  width: 3rem;
  float: right;
  font-size: 0.2rem;
  height: 0.4rem;
  line-height: 0.4rem;
  color: #666;
}
.foot {
  padding-top: 2rem;
}
.details-imgBox{
  width: 100%;  
}   
</style>