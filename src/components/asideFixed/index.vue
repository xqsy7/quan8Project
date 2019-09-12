<template>
    <div class="aside">
        <div class="item-top" v-for="(item,index) in asideData" :key="index">
            <div class="imgBox">
                <img :src="item.imgSrc" alt="">
            </div>
            <div>
                {{item.divText}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"AsideFixed",
    data(){
        return {
            asideData:[
                {
                    imgSrc:"/public/img/asideFixed/app.png",
                    divText:"手机领劵"
                },
                {
                    imgSrc:"/public/img/asideFixed/dsdk.png",
                    divText:"合伙人"
                },
                {
                    imgSrc:"/public/img/asideFixed/wx.png",
                    divText:"公众号"
                },
                {
                    imgSrc:"/public/img/asideFixed/jd.png",
                    divText:"京东商城"
                },{
                    imgSrc:"/public/img/asideFixed/pdd.png",
                    divText:"拼多多"
                }
            ]
        }
    }
}
</script>

<style scoped>
    .aside{
        display: none;
        position: fixed;
        z-index: 888;
        left: 0;
        top: 50%;
        border-right: 1px solid #e1e1e1;
        width: 73px;
        margin-top: -132px;
    }
    .item-top{
        border-top: 1px solid #fff;
        cursor: pointer;
        height: 75px;
        background-color: #eee;
        padding: 5px 0;
        display: flex;
        justify-content: center;
        align-content: space-between;
        flex-direction: column;
    }
    .imgBox{
        width:100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .item-top img{
        width: 54px;
        margin-top: 3px;
    }
    .item-top div{
        width: 100%;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        color: #999;
    }
</style>