<template>
    <div class="mine">
        <div class="mine1">
            <div class="else">
                <a href="">
                    <img src="" alt="">
                </a>
            </div>
            <div class="info">
                <div class="user_portrait">
                    <img src="img/user.png" alt="" ref="imgT">
                </div>
                <div class="user_type">
                    <span>
                        <a href="#/login" ref="name">登陆</a>
                        <a href="#/register" ref="del">/注册</a>
                    </span>
                </div>
            </div>

            <!-- mian -->
            <div class="user_main">
                <div class=""></div>
                <div class="user_min">
                    <div class="my_favorite">
                    <a href="#/collection">
                        <img src="img/love.png" alt="">
                        <span>我的收藏</span>
                    </a>
                </div>
                <div class="my_foot">
                    <a href="">
                        <img src="img/foot.png" alt="">
                        <span>我的足迹</span>
                    </a>
                </div>
                </div>
            </div>
            <!--  -->
            <div class="card">
                <p>常用工具</p>
                <ul>
                    <li v-for="(item,index) in liData" :key="index">
                        <img :src="item.imgSrc" alt="">
                        <span>{{item.title}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Mine",
    data(){
        return {
            liData:[
                {
                    imgSrc:"img/tools1.png",
                    title:'领劵帮助',
                },
                {
                    imgSrc:"img/tools2.png",
                    title:'专属客服',
                },
                {
                    imgSrc:"img/tools4.png",
                    title:'意见反馈',
                }
            ]
        }
    },
    beforeRouteEnter (to, from, next) {
        if(sessionStorage.getItem("token")){
            next((vm)=>{
                vm.$refs.name.textContent = sessionStorage.getItem("token");
                vm.$refs.del.textContent = "";
                vm.$refs.imgT.src = "img/touxiang.jpg"
            });

        }else{
            next("/login");
        }
    },
    methods:{
    }
}
</script>

<style scoped>
.mine{
    max-width: 750px;
    height: 7rem;
    text-align: left;
    margin: auto;
    overflow: hidden;
    padding-bottom: 44px;
    display: block;
}
.mine1{
    max-width: 750px;
    height: 6rem;
    background: url('https://cmsstatic.dataoke.com/wap_new/user/images/user_bg.png?v=2019-09-06') no-repeat #f6f6f6;
    background-size: 100% 195px;
    position: relative;
    z-index: 1;
    zoom: 1;
    height:100%;
}
.else{
    position: absolute;
    zoom: 1;
    right: 0;
    top: 12px;
    z-index: 10;
    color: #fff;
}
.info{
    width: 100%;
    height: 66px;
    box-sizing: border-box;
    padding-left: 15px;
    position: relative;
    z-index: 1;
    zoom: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.user_portrait{
    /* height: 100%; */
    /* width: 4.7rem; */
    /* width: 100%; */
    border-radius: 50%;
    box-sizing: border-box;
    position: relative;
    z-index: 1;
    zoom: 1;
    float: left;
}
.user_type{
    width: 60%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    height: 4.7rem;
    line-height: 4.7rem;
    margin-left: .2rem;
}
.user_type a{
    color: #fff;
    font-weight: 500;
    font-size: 20px;
    font-family: PingFangSC-Medium;
}
.user_portrait img{
    height: .8rem;
    width: .8rem;
    border-radius: 50%;
    display: block;
    float: left;
    margin: auto;
}
.user_main{
    background: 0 0;
    margin: 24px 10px;
}
.user_min{
    width: 90%;
    margin: .3rem auto 0;
    height: 93px;
    background: #fff;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
}
.my_favorite a,.my_foot a{
    display: flex;
    align-items: center;
    flex-direction: column;
}
.my_favorite a img,.my_foot a img{
    display: block;
    width: .5rem;
    height: .5rem;
}
.my_favorite span,.my_foot span{
    width: 54px;
    height: 18px;
    font-size: 13px;
    font-family: PingFangSC-Light;
    font-weight: 300;
    color: #666;
    line-height: 18px;
    display: block;
}
.card{
    background: #fff;
    box-shadow: 0 0 6px -1px rgba(0,0,0,.09);
    border-radius: 6px;
    margin-top: 15px;
    width: 87%;
    margin: 0 auto;
}
.card p{
    height: 35px;
    border-bottom: 1px solid #EEE;
    line-height: 35px;
    padding-left: 15px;
    box-sizing: border-box;
    font-size: 14px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: #333;
}
.card ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.card ul li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 1.2rem;  
}
.card ul li img{
    width: .5rem;
    height: .5rem;
    display: block;
}
.card ul li span{
    width: 54px;
    height: 18px;
    font-size: 13px;
    font-family: PingFangSC-Light;
    font-weight: 300;
    color: #666;
    line-height: 18px;
    display: block;
    margin-top: 6px;
}

</style>