<template>
    <div class="service">
        
    <Top/>
    <Content/>
    </div>
</template>

<script>
import Top from "@components/servicePage/top.vue";
import Content from "@components/servicePage/content.vue";
export default {
    name:"service",
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