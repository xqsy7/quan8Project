<template>
    <div class="banner">
        <div class="bacColor"></div>
        <van-swipe :autoplay="5000" class="imgBox" :touchable=true :duration="500">
            <van-swipe-item v-for="(item, index) in bannerImg" :key="index">
                <img v-lazy="item.pic" />
            </van-swipe-item>
        </van-swipe>
        <ul>
            <li v-for="(item,index) in ulData" :key="index" :class="index==0?'bigImg':'leftImg'">
                <img :src="item.address" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import {banner,imgData} from "@api";
Vue.use(Lazyload);
Vue.use(Swipe).use(SwipeItem);
export default {
    name:"Banner",
    data(){
        return{
            bannerImg:[],
            ulData:[]
        }
    },
    components:{
        
    },
    mounted(){
        var mySwiper = new Swiper(this.$refs.swiperContainer, {
            autoplay: true,//可选选项，自动滑动
            pagination: {
                 el: '.swiper-pagination',
            },
        })
    },
    async created(){
        let data = await banner();
        
        this.bannerImg = data.data.config;

        let uldata = await imgData();

        this.ulData = uldata.data.config;
    }
}
</script>

<style scoped>

.banner{
    width: 100%;
    position: absolute;
    top: 2rem;
    z-index: 101;
    margin-bottom: .1rem;
}
.bacColor{
    width: 100%;
    height: 3rem;
    position: absolute;
    top: -.1rem;
    background: #48a6db;
}
.imgBox{
    width: 8rem;
    height: 3.4rem;
    margin-left: .24rem;
    margin-right: .2rem;
}
.imgBox img{
    width: 7rem;
    height: 100%;
    border-radius: .1rem;
}
.banner ul{
    width: 100%;
    margin-top: .1rem;
}
.bigImg{
    width: 100%;
    height: 2rem;
    overflow: hidden;
    border-radius: .05rem;
    margin-bottom: .1rem;
}
.bigImg img{
    border-radius: .05rem;
    width: 100%;
    height: 100%;
}
.leftImg{
    float: left;
    width: 3.6rem;
    height: .85rem;
    border-radius: .05rem;
    margin-top: .05rem;
    margin-left: .1rem;
}
.leftImg img{
    width: 3.5rem;
    height: 1.7rem;
    border-radius: .1rem;
}

</style>