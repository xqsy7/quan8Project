<template>
    <div id="seach">
        <div class="seach-head">
            <a href="" class="iconfont iconfont1">&#xe6f3;</a>
            <div class="seach">
                <div class="seach-input">
                    <i class="iconfont iconfont2">&#xe633;</i>
                    <div class="input1">
                        <label>
                        <input type="text" placeholder="输入商品名或粘贴宝贝标题搜索">
                        </label>
                    </div>
                </div>
                <input type="submit" class="submit" value="搜索">
            </div>
        </div>
        <div class="data">
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
import {seach} from "@api";
export default {
    name:"Seach",
    data(){
        return {
            a:"a",
        }
    },
    async created(){
        let data = await seach(this.a);
        console.log(data);
    }
}
</script>

<style scoped>
#seach{
    width: 100%;
    height: 100%;
    background: #ffffff;
    position: relative;
    height: 1rem;
}
.iconfont1{
    color: #ccc;
    font-size: .4rem;
    position: absolute;
    left: .1rem;
    top:.2rem;
}
.seach-head{
    width: 100%;
    height: 100%;
    float: left;
}
.seach{
    position: relative;
    top: .2rem;
    left:.8rem;
}
.seach-input{
    position: relative;
    width: 5rem;
    height: .5rem;
    border-radius: .5rem;
    border:1px solid #cccccc;
}
.iconfont2{
    position: absolute;
    top: .1rem;
    left:.4rem;
}
.input1{
    position: absolute;
    top: .07rem;
    left:.7rem;
}
.input1 input{
    border: 0;
    width: 4rem;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
}
.submit{
    position: absolute;
    top: .07rem;
    right: 1.3rem;
    border: 0;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
}
.data{
    padding-top: 1rem;
    height: 7rem;
    width: 100%;
    background: #ffffff
}
</style>