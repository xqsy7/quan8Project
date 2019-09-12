<template>
         <!-- nav -->
         <div>
    <div class="main-title">
        <a href="#" class="main-back" ></a>
        <span>护肤套装</span>
        <a href="#" class="main-more">
        </a>
    </div>
    <!-- banner -->
    <div class="list-title">
        <ul>
            <router-link tag="li" to="/menu/popularity" >人气</router-link>
            <router-link tag="li" to="/menu/newest">最新</router-link>
            <router-link tag="li" to="/menu/sales" >销量</router-link>
        </ul>
    </div>
    <router-view></router-view>

    </div>

</template>
<script>

export default {
  name: "Content",
  data(){
      return{
          flag:true,
      }
  },
    methods:{
    }
}
</script>

<style scoped>
    
/* banner */
.list-title{
   
    height: 40px;
    margin-top: 40px; 
    background: #fff;
    margin-bottom: 7px;
    position: fixed;
    top: 0;
    z-index: 54;
    width:100%;
}
/* .list-title ul{
    width: 100%; height:50px;

} */
.list-title li{
    list-style: none;
    box-sizing: border-box;
    float: left;
    width: 33%;
    text-align: center;
    line-height: 40px;
    height:100%;
    color:rgb(163, 154, 154);
    font-size:12px;
}


.router-link-active{
   border-bottom: 1px solid #fe4a65;
}
/* .list-title li:nth-of-type(1):hover li:nth-of-type(1){
    border-bottom: 1px solid white;
}  */
.list-title li:nth-of-type(4) span{
    position: relative;
    display: inline-block;
    width: 15px;
    height: 15px;
    background-image: url("https://cmsstatic.dataoke.com/web/images/pic_resources.png?v=201989285433");
    background-position: -277px -80px;
    background-repeat: no-repeat;
    background-size: 300px; 
}
.list-title li:nth-of-type(4) span:hover{
    background-position: -277px -95px;
}
.list-title li:hover{
    border-bottom: 1px solid #fe4a65;
    color: #fe4a65;
}

</style>