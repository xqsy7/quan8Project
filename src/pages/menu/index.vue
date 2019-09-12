<template>
    <div class="menu">
        
    <Top/>
    <Content/>
    </div>
</template>

<script>
import Top from "@components/menuPage/top.vue";
import Content from "@components/menuPage/content.vue";
export default {
    name:"Menu",
    components:{
        Top,
        Content,
    }
}

</script>
<style scoped>
.menu{
    width:100%;
    height:100%;
}
</style>