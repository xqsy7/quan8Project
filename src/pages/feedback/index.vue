<template>
    <div class="feedback">
        
    <Top/>
    <Content/>
    <!-- <MessageBox/> -->
    </div>
</template>

<script>
// import MessageBox from "@lib/messageBox/index.js"
import Top from "@components/feedbackPage/top.vue";
import Content from "@components/feedbackPage/content.vue";
export default {
    name:"feedback",
    components:{
        Top,
        Content,
        // MessageBox,
    },
    //  created(){
    //     // console.log(MessageBox);

    //     MessageBox.init({
    //         // title:"nihao",
    //         // content:"nihao",
    //     })
    // },
}

</script>
<style scoped>
.menu{
    width:100%;
    height:100%;
}
</style>