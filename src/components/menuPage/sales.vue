<template>
 <!-- content -->
  <div class="content">
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <div class="image">
                    <img :src="item.pic">
                </div>
                <div class="centent-content">
                    <h3>{{item.dtitle}}</h3>
                    <span>{{item.fashionTag}}</span>
                    <div>
                        <span>天猫价 {{item.yuanjia+item.quanJine}}</span>
                        <span>已售<p>{{item.xiaoliang}}</p>件</span>
                    </div>
                    <div class="money">
                        <div class="juan">
                                <span>券后价  <p> {{item.yuanjia}}</p></span>
                               <span>{{item.quanJine}}元卷</span>
                        </div>
                </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import http from "@utils/http";
export default {
    name:"Sales",
   data() {
    return {
        list: [],
        listA:[],
        listB:[],
        listC:[],
    };
  },
  created(){
    //    http("get","/api/category/index/lingquan-live-new?pageId=4&pageSize=10&entityId=4&type=1&userId=669231&tuserId=669231")
    //     .then((data)=>{
    //         this.listA = data.data.list
    //         // console.log(this.listA)
    //        for(var i=0;i<this.listA.length;i++){
    //             this.list.push(this.listC[i]);
    //         }
    //     }),
        http("get","/api/category/index/lingquan-live-new?pageId=5&pageSize=10&entityId=4&type=1&userId=669231&tuserId=669231").then((data)=>{
            this.listB=data.data.list;
            // console.log(this.listB)
           for(var i=0;i<this.listB.length;i++){
                this.list.push(this.listB[i]);
            }
        }),
        http("get","/api/category/index/lingquan-live-new?pageId=6&pageSize=10&entityId=4&type=1&userId=669231&tuserId=669231")
        .then((data)=>{
            this.listC = data.data.list
            // console.log(this.listC)
            for(var i=0;i<this.listC.length;i++){
                this.list.push(this.listC[i]);
            }
            
        })
        console.log(this.list);
    }
}

</script>
<style scoped>

/* content */
.content{
    widows: 100%;
    padding-top:80px;
    padding-left:10px;

}
.content ul li {
    padding-left: 25px;
    height:180px;
}
.content ul li .image img{
    height:126px;
    width:126px;
    margin-right:16px;
    margin-top:18px;
    margin-left:10px;
}
.content ul li>div{
    float: left;
    
}
.content ul li>div:nth-of-type(2){
    margin-left:20px;
    width:65%;
}
.content ul li div:nth-of-type(2) h3{
    line-height:48px;
    font-size:18px;
    font-weight:400;
}
.content ul li div:nth-of-type(2)>span{
    border:1px solid #FBAA58;
    color:#FBAA58;
    font-size:12px;
    padding:3px 8px;
}
.content ul li div:nth-of-type(2) div:nth-of-type(1){
    display:flex;
    justify-content: space-between;
    margin-top: 14px;
}
.content ul li div:nth-of-type(2) div:nth-of-type(1) span:nth-of-type(1){
    padding-right: 10px;
    margin-right: 10px;
    color:#aaa;
    font-size:16px;
}
.content ul li div:nth-of-type(2) div:nth-of-type(1) span:nth-of-type(2){
    color:#aaa;
    font-size:12px;
}
.content ul li div:nth-of-type(2) div:nth-of-type(1) span:nth-of-type(2)>p{
    display: inline-block;
    font-size:18px;
    color: #FF2B22;
}
.content ul li>div:nth-of-type(2)>div:nth-of-type(2)>span{
    display:flex;
    justify-content: space-between;

}
.content ul li div:nth-of-type(2) div:nth-of-type(2) span:nth-of-type(1){
    color: #FC4D52;
    display:inline-block;
    font-size:14px;
    /* height:44px; */
}
.content ul li div:nth-of-type(2) div:nth-of-type(2) span:nth-of-type(1)>p{
    display:inline-block;
    color: #FC4D52;
    font-size:22px;
}
.content ul li div:nth-of-type(2) div:nth-of-type(2) span:nth-of-type(2){
    display: inline-block;
    width:60px;
    color:#FC4D52;
    border:1px solid #FF2B22;
    padding:4px 8px;
    text-align: center;
}

</style>