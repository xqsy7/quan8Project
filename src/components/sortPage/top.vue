<template>
    <div>
        <div class="sort-top">
     <!-- <a class="main-back iconfont" @click="handleBack()">&#xe6f3;</a> -->
    <div class="sort-box">
        <div><button class="sort-sea"> <span class="iconfont">&#xe633;</span></button></div>
        <div class="sort-seaContent">请输入商品或宝贝标题查找</div>
        
    </div>
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
export default {
    name:"Top",
     methods:{
      handleBack(){
          this.$router.back();
      }
  },
}
</script>
<style scoped>
.sort-top{
    /* display:flex; */
    /* flex:1; */
    position: relative;
    height:44px;
    width:100%;
    background-image: linear-gradient(to left, rgb(250, 77, 190) 0px, rgb(251, 170, 88) 100%);
}
.sort-top .main-back{
    color:white;
    border:0;
    font-size:25px;
    position: absolute;
    left:12px;
    display:inline-block;
    height:35px;
    width:35px;
    background: url("http://localhost:8080/public/img/sort/com.png") -32px 0px no-repeat;
    background-size:287px 200px;
    top:8px;


}

.sort-box{
    position: absolute;
    top:8px;
    right:50px;
    background: #fff;
    width:93%;
    height:28px;
    line-height:28px;
    border-radius:4px;

}
.sort-box>div{
    display:flex;
    float:left;
}
.sort-box .sort-sea{
    float:left;
    border: 0;
   height:28px;
   width:4%;
   background-color:rgba(white, white, white, 0);
   background: url("http://localhost:8080/public/img/sort/com.png") 8px -22px no-repeat;
    background-size: 287px 800px;
    display: block;
}
.sort-box .sort-seaContent{
    width:84%;
    font-size:14px;
    color:#ccc;
}
.main-more{
    /* width:7%; */
    float:right;
    color:white;
    font-size:20px;
     padding-top:10px;
     padding-right:10px;
}
.main-more .main-detail{
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
.main-more:hover .main-detail{
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