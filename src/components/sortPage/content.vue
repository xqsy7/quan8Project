<template>
  <div class="content">
    <div class="left">
      <div class="sort-left">
        <a
          v-for="(item,index) in lists"
          :key="index"
          :class="index==flag?'active':''"
          @click="handleIndex(index)"
        >{{item.name}}</a>
      </div>
    </div>
    <div class="right">
      <ul class="right-content">
        <h3>热门商品</h3>
        <router-link 
        tag="li"
        :to="'/menu?cid='+one.api_cid"
        v-for="(one,index) in arr" 
        :key="index">
          <a href="#">
            <img  :src="one.img"><span>{{one.name}}</span></a></router-link>
      </ul>
    </div>
</div>
</template>

<script>
import http from "@utils/http";
import axios from "axios";
export default {
  name: "Content",
  methods: {
    handleIndex(index) {
      this.flag = index;
      this.arr=[];
      this.arr=this.lists[index].floors[0].list;
      this.brr=this.lists[index].floors[1].list;
      for(let i=0;i<this.brr.length;i++){
        this.arr.push(this.brr[i]);
      }
        //  console.log(this.arr);
    }
  },
  data() {
    return {
      lists: [],
      arr:[],
      brr:[],
      flag: 0,
    };
  },
  created() {
    axios({
      method: "get",
      url: "/goods/list"
    }).then(data => {
      this.lists = data.data.data.data;
      console.log(this.lists);
      this.arr=this.lists[0].floors[0].list;
      this.brr=this.lists[0].floors[1].list;
      for(let i=0;i<this.brr.length;i++){
        this.arr.push(this.brr[i]);
      }
         console.log(this.arr);
    });

    
  
}
}
</script> 
<style scoped>
.content {
  width: 100%;
  background: white;
  height: 100%;
}
.content > div {
  display: flex;
  justify-content: flex-start;
  float: left;
}
.right{
  padding-left:30px;
  width:90%;
  background: white;
}
.left {
  /* height:; */
  width: 10%;
  height:100%;
}
.sort-left {
  height: 100%;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
}
.sort-left a {
  height: 45px;
  width: 100%;
  line-height: 45px;
  display: block;
  height: 45px;
  color: #333;
  z-index: 10;
  font-size: 14px;
  text-align: center;
}
.sort-left .active {
  background: white;
  color: #fc3f78;
}
.content .right-content h3{
  display: block;
  padding-top:10px;
    font-size: 20%;
    font-weight: 400;
    color: #333;
    /* line-height: 20px; */
    /* height:20px; */
}
.content .right-content{
  display:block;
  width:100%;
  text-align:center;
  margin-bottom:120px;
}
.content .right-content li{
  float: left;
  width:33%;
  text-align:center;
  margin-top:10px;
}
.content .right-content li a>img{
margin-left:20px;
margin-right:20px;
height:60%;
width:60%;
display: inline-block;
}
.content .right-content li a>span{
  display: block;
  margin-top:20px;
  text-align:center;
 padding-bottom: 10px;
}
</style>