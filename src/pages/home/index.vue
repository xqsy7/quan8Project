<template>
    <div class="home page">
        <router-link to="/home">
        </router-link>
        <Head/>
        <Banner/>
        <IconNav/>
        <GroupTop/> 
        <FindProduct/>
    </div>
</template>

<script>
import Head from "@components/homePage/head.vue";
import Banner from "@components/homePage/banner.vue";
import IconNav from "@components/homePage/iconNav.vue";
import GroupTop from "@components/homePage/goupTop.vue";
import FindProduct from "@components/homePage/findProduct.vue";
export default {
    name:"Home",
    components:{
        Head,
        Banner,
        IconNav,
        GroupTop,
        FindProduct
    }
}
</script>

<style scoped>
.home{
    width: 100%;
    height: 100%;
    /* position: relative; */
    /* overflow: hidden; */
    clear: both;
}
</style>