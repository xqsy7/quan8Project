<template>
    <div class="sort">
        <router-link to="/sort" tag="div"></router-link>
        <Top/>
        <Content/>
    </div>
</template>
<script>
import Top from "@components/sortPage/top.vue";
import Content from "@components/sortPage/content.vue";
export default {
    name:"Sort",
    components:{
        Top,
        Content,
    }
}
</script>
<style scoped>
.sort{
    width:100%;
    height:100%;
}
</style>



       








