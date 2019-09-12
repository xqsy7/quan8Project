<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
    name:"Xu-Bscroll",
    mounted(){
        this.scroll = new Bscroll(this.$refs.wrapper,{
            // 开启上拉加载更多
            pullUpLoad:true,
            tap:true,
            click:true,
        })
    },
    methods:{
        pullingUpHandler(cb){
            this.scroll.on("pullingUp",()=>{
                cb();
            })
        },
         handlefinishPullUp(){
        
            this.scroll.finishPullUp();
            //并且重新计算滚动区域的高度
            this.scroll.refresh();
         
        }
    }
}
</script>

<style scoped>
.wrapper{
    height: 100%;
}
</style>