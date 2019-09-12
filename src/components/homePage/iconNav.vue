<template>
    <div class="iconNav">
        <ul class="nav_ul">
            <li v-for="(item,index) in liData" :key="index">
                <a href="">
                    <img :src="item.address" alt="">
                    <span>{{item.name}}</span>
                </a>
            </li>
        </ul>


    </div>
</template>

<script>
import http from "@utils/http";
import {iconNav} from "@api";
export default {
    name:"IconNav",
    data(){
        return {
            liData:[],
        }
    },
    async created(){
        let data = await iconNav();
        this.liData = data.data.config.data;
    },
}
</script>

<style scoped>
.iconNav{
    position: relative;
    width: 100%;
    top:7.5rem;
    margin-top:.1rem;
}
.iconNav ul{
    background: #ffffff;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: .2rem;
    margin-right: .2rem;
    border-radius: .1rem .1rem;
}
.iconNav ul li span{
    width: 100%;
    display: block;
    text-align: center;
    font-size: .24rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #333;
    line-height: .32rem;
}
.iconNav ul li img{
    width: 1rem;
    height: 1rem;
}
</style>