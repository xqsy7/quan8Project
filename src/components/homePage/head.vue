<template>
    <div class="head">
        <div class="seach">
                <div class="seach1">
                <router-link to="/seach" tag="div" class="seach-R">
                    <div class="seach2">
                        <span class="seach3">
                            <span class="iconfont">&#xe633;</span>
                            输入商品名或粘贴宝贝标题搜索
                        </span>
                    </div>
                </router-link>
            </div>
        </div>

        <!-- 导航栏 -->
        <div class="nav">
            <div class="nav1">
                <div class="nav-center">
                    <div class="selected">
                        <span>精选</span>
                        <div></div>
                    </div>
                    <div class="wrapper" ref="wrapper">
                        <div class="center">
                            <v-touch 
                            tag="div"
                            @swipeleft="onSwipeLeft()"
                            v-for="(item,index) in headData" :key="index" class="center1">{{item.name}}</v-touch>
                        </div>
                    </div>
                    
                    <div class="iconfont select">&#xe64d;</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import http from "@utils/http";
import BScroll from 'better-scroll';
import {headNav} from "@api";
Vue.use(Lazyload);
Vue.use(Swipe).use(SwipeItem);
export default {
    name:"Head",
    data(){
        return {
            headData:[]
        }
    },
    async created(){
        let data = await headNav()
        this.headData = data.data;
    },
    mounted(){
        let scroll = new BScroll(this.$refs.wrapper,{
            scrollX: true,
            click: true
        })
    },
    methods:{
        onSwipeLeft(){
        }
    }
    
}
</script>

<style scoped>

.head{
    width: 100%;
    height: 1.9rem;
    width: 100%;
    margin: auto;
    background: #48a6db;
    position: fixed;
    z-index: 1111;
    overflow: hidden;
    top:0;
    left:0;
    border-bottom: 1px solid rgba(0,0,0,0);
}
.seach1{
    height: .9rem;
    overflow: hidden;
    display: flex;
    margin: auto auto .08rem;
    align-items: center;
    box-sizing: border-box;
    padding-right: .2rem;
}
.seach-R{
    width: 100%;
}
.seach2{
    flex: 1;
    height: .64rem;
    background: #fff;
    border-radius: .72rem;
    margin-left: .18rem;
    margin-top: .18rem;
    display: flex;
    align-items: center;
}
.seach3{
    height: .64rem;
    font-size: .3rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #999;
    line-height: .58rem;
    display: inline-block;
    padding-left: .24rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.iconfont{
    font-size: .36rem;
    margin-right: .16rem;
    font-weight: 400;
}
.nav{
    background: rgba(0,0,0,0);
    width: 100%;
    max-width: 100%;
    overflow: inherit!important;
    padding-bottom: 0;
}
.nav1{
    height: .8rem;
    position: relative;
    zoom: 1;
    line-height: .8rem;
}
.nav-center{
    margin: 0 .15rem 0 .3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height:.8rem;
}
.selected{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: .34rem;
    font-weight: 400;
    color: #fff;
}
.selected span{
    width:100%;
    font-size: .34rem;
    line-height: .75rem;
}
.selected div{
    width: .6rem;
    height: .05rem;
    background:#fff;
}
.wrapper{
    width: 5.5rem;
    overflow: hidden;
    height:.8rem;
}
.center{
    width: 15rem;
    margin-left: .4rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: .34rem;
    color: rgba(255,255,255,.65);
    overflow: hidden;
    white-space: nowrap;
}
.center div{
    margin-left: .1rem;
}
.select{
    position: absolute;
    right: 0rem;
    color: #fff;
}
</style>