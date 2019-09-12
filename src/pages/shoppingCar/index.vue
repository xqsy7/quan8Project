<template>
    <div>
        <Top/>
        <Center/>
        <Bottom/>
    </div>
</template>

<script>
import Top from "@components/shoppingCar/top"
import Center from "@components/shoppingCar/center"
import Bottom from "@components/shoppingCar/bottom"
export default {
    name:"ShoppingCar",
    components:{
        Top,
        Center,
        Bottom
    },
    
}
</script>

<style scoped>

</style>