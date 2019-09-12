<template>
    <div class="collection">
        <div class="icon_head">
            <a href="" class="iconfont confontz" >&#xe6f3;</a>
            <div class="collection-main">我的收藏</div>
        </div>
        <div class="layout">
            <div class="user_coll">
                <div class="img" ref="show"></div>
                <div class="text" v-show="flag">登陆后添加收藏
                    <p class="msg">收藏云端同步，不错过任何优惠哦</p>
                </div>
                <div class="btn" v-show="flag">
                    <a href="" class="btn-a">登陆/注册</a>
                </div>
            </div>
        </div>
        <a href="#/city" class="city">城市</a>
    </div>
</template>

<script>
export default {
    name:"Collection",
    data(){
        return {
            flag:true,
        }
    },
    beforeRouteEnter (to, from, next) {
        if(sessionStorage.getItem("token")){
            next((vm)=>{
                vm.flag = false;
                vm.$refs.show.textContent = "尊敬的用户,您还没有任何的收藏";
            });

        }else{
            next("/login");
        }
    }
}
</script>

<style scoped>
.collection{
    width: 100%;
}
.icon_head{
    background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
    border-bottom-color: transparent;
    display: flex;
    height: .9rem;
    align-items: center;
}
.confontz{
    font-size: .4rem;
    margin-left: .1rem;
    color: #fff;
}
.collection-main{
    height: .9rem;
    line-height: .9rem;
    margin-left:2.5rem;
    text-align: center;
    font-size: 16px;
    color: #fff;
    position: relative;
    z-index: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.layout{
    max-width: 750px;
    text-align: left;
    margin: auto;
    overflow: hidden;
}
.user_coll{
    text-align: center;
    height: 100vh;
    background-color: #fff;
}
.img{
    background: url("https://cmsstatic.dataoke.com/wap_new/user/images/user_sc.svg?v=2019-09-10") center bottom no-repeat;
    width: 100%;
    height: 35vh;
    margin-bottom: .2rem;
    font-size: .2rem;
    text-align: center;
    line-height: 35vh;
    color: aqua;
}
.text{
    font-size: .3rem;
    line-height: 1rem;
    padding-bottom: .2rem;
}
.msg{
    color: #999;
}
.btn-a{
    border-radius: .3rem .3rem;
    background: linear-gradient(to left,#FF5E90 0,#FF927C 100%);
    padding: .3rem .8rem;
    box-shadow: 0 2px 6px 0 rgba(255,135,135,.5);
    font-size: .3rem;
    color: #ffffff;
}
.city{
    position: absolute;
    top: .3rem;
    right:.2rem;
    font-size: .3rem;
}
</style>