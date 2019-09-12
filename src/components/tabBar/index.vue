<template>
    <div class="tabBar">
        <ul>
            <router-link 
            :to="item.path"
            tag="li"
            v-for="(item,index) in tabBarData" 
            :key="index"
            >
                <span v-html="item.icon" class="iconfont"></span>
                <span>{{item.liText}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"TabBar",
    data(){
        return {
            tabBarData:[
                {
                    icon:"&#xe61c;",
                    liText:"首页",
                    path:"/home"
                },
                {
                    icon:"&#xe6bf;",
                    liText:"9.9包邮",
                    path:"/test"
                },
                {
                    icon:"&#xe60b;",
                    liText:"分类",
                    path:"/gou"
                },
                {
                    icon:"&#xe666;",
                    liText:"收藏",
                    path:"/collection"
                },
                {
                    icon:"&#xe64a;",
                    liText:"我的",
                    path:"/mine"
                },
            ],
        }
    },
}
</script>

<style scoped>
.tabBar{
    border-top: solid 1px #eee;
    position: fixed;
    zoom: 1;
    z-index: 110;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
}
.tabBar div{
    width: 1rem;
}
.tabBar ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: .3rem;
    margin-right: .3rem;
}
.tabBar ul li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #666;
    text-align: center;
    font-size: .25rem;
    padding: .03rem 0 .02rem;
    position: relative;
    z-index: 1;
    zoom: 1;
    line-height: .4rem;
}
.iconfont{
    font-size: .3rem;
}
.active{
    background: red;
}
.tabBar ul .router-link-active{
    color:#c33;
 }
</style>