<template>
  <div class="top">
    <!-- nav -->
    <div class="main-title">
      <a class="main-back iconfont" @click="handleBack()">&#xe6f3;</a>
      <span>客户服务</span>
      <a class="main-more">|||
           <div class="main-detail">
      <ul>
         <router-link tag="li" to="/home">首    页</router-link>
          <li>搜    索</li>
          <router-link tag="li" to="/service">客    服</router-link>
          <router-link tag="li" to="/feedback">反    馈</router-link>
          <li>我    的</li>
          </ul>  
  </div>
      </a>
    </div>
 
  </div>
 
</template>


<script>
import Vue from "vue";
import { Popup,Button  } from "vant";

Vue.use(Popup);
Vue.use(Button);

export default {
  name: "Top",
   methods:{
      handleBack(){
          this.$router.back();
      }
  },

};
</script>

<style scoped>
.main-title {
  height: 44px;
  background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
  border-bottom-color: transparent;
  padding: 8px 10px;
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 120;
  display: block;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  justify-content: space-between;
}
.main-title .iconfont {
  color:white;
  display: inline-block;
  margin-left: 10px;
  font-size: 28px;
}
.main-title .main-more {
  color:white;
  padding-bottom:10px;
  display: inline-block;
  font-size: 22px;
  padding-right: 10px;
}
.main-title span:nth-of-type(1) {
  font-family: Simhei;
  font-size: 17px;
  height: 28px;
  line-height: 28px;
  color: #fff;
  text-align: center;
}
.main-title .list-title {
  position: absolute;
  right: 50px;
  top: 50px;
  height: 200px;
  width: 100px;
  text-align: center;
  font-size: 20px;
}
.main-title .main-more .main-detail{
    background:#fa4dbe;
    height:220px;
    width:120px;
    position: absolute;
    top:44px;
    right:-300px;
    /* display:none; */
    z-index:100;
    font-size:16px;
}
.main-title .main-more:hover .main-detail{
    right:0px;
    /* display: block; */
   transform: all 2s;
}
.main-detail>ul{
    border-top:1px solid white;
   background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
    height:220px;
    width:100px;
    text-align: center;
}
.main-detail>ul li{
    color:white;
    height:44px;
    text-align:center;
   line-height: 44px;
   border-bottom:1px solid white;

}

</style>