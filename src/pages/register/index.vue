<template>
    <div>
        <div class="head">
            <em class="iconfont iconfont1" @click="clickBackHandler()">&#xe6f3;</em>
            <a href="">
                <h1>注册</h1>
            </a>
        </div>

        <div class="layout">
            <form action="">
                <label>
                    <div class="userName">
                        <i class="iconfont iconfont2">&#xe697;</i>
                        <input type="text" placeholder="用户名" v-model="userName" @blur="blurHandelr($event)" ref="userName">
                        <i class="iconfont iconfont3" @click.prevent="clickDelHandler()">&#xe615;</i>
                        <p ref="text" :class="red?'active':'active1'"></p>
                    </div>
                </label>
                 <label>
                    <div class="password">
                        <i class="iconfont iconfont4">&#xe623;</i>
                        <input type="password" placeholder="密码" v-model="password" ref="password" @blur="passwordHandler()">
                        <i class="iconfont iconfont5" @click="clickSeeHandler()">&#xe718;</i>
                        <p :class="red?'active':'active1'"></p>
                    </div>
                </label>
                <div class="btn">
                    <button class="btn1" @click.stop="clickPushHandler()">注册</button>
                </div>
                <div class="xieyi">
			        点击"注册"表示您已同意 
                    <a href="">
                        《领券吧用户协议》
                    </a>
                </div>
            </form>
        </div>
        <div class="foot">
            <div class="login-Z">
                    
			    已有账号？点击
                <a href="#/register">登陆</a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name:"Register",
    data(){
        return {
            userName:"",
            password:"",
            red:false,
        }
    },
    methods:{
        clickBackHandler(){
            this.$router.back();
        },
        clickPushHandler(){
            if( this.$refs.text.textContent == "输入的用户名重复" ){
                alert("输入的用户名重复,请重新输入")
            }else{
                axios({method:"post",url:"http://localhost:3000/userList",data:{
                    name:this.userName,
                    password:this.password
                    }}).then((data)=>{
                    console.log(data.request.status);
                    if(data.request.status == 201){
                        sessionStorage.setItem("token",this.userName);
                        this.$router.push("/home");
                    }
                })
            }
        },
        blurHandelr(e){
            axios({
                method:"get",
                url:'http://localhost:3000/userList?name='+e.target.value,
            }).then((data)=>{
                if(data.data.length>0){
                    this.red = false;
                    this.$refs.text.textContent = "输入的用户名重复"
                }else{
                    this.red = true;
                    this.$refs.text.textContent = "输入的用户名可用"
                }
            })
        },
        clickDelHandler(){
            this.$refs.userName.value = "";
        },
        clickSeeHandler(){
            this.$refs.password.type = "text"
        },
        passwordHandler(){
            this.$refs.password.type = "password"
        }
    }
}
</script>

<style scoped>
.login{
    height: 100%;
     background: #ffffff;
}
.head{
    height:100%;
   margin-bottom: 1rem;
}
.head h1{
    text-align: center;
    height: 45px;
    line-height: 45px;
    font-size: 16px;
    color: #333;
    position: relative;
    z-index: 2;
    zoom: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 300;
}
.iconfont1{
    float: left;
    height: 45px;
    font-size: .4rem;
    line-height: 45px;
    margin-left: .2rem;
}
.layout{
    width: 100%;
    height: 100%;
}
.layout form{
    width: 6rem;
    margin:0 auto;
}
.iconfont2,.iconfont5{
    line-height: 1.3rem;
    text-indent: .2rem;
    color: #666;
    font-size: .4rem;
}
 .iconfont3,.iconfont4{
     line-height: 1.3rem;
    text-indent: .2rem;
     margin-left: .1rem;
     font-size: .4rem;
 }
 
.layout form input{
    color: #333;
    font-size: .3rem;
    border: 0;
    width: 90%;
    width: 4rem;
    height:.45rem;
    margin-right: .1rem;
    margin-left: .1rem;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
}
.userName,.password{
    height: 1.3rem;
     border-bottom: 1px solid #eee;
}
.btn{
    margin-top: .8rem;
    width: 100%
}
.input_msg{
    border: 1px solid #cccccc;
    border-radius: 20px;
    width: 1.6rem;
    font-size: .2rem;
    line-height: .5rem;
    height: .5rem;
    text-align: center;
    position: absolute;
    right: -.1rem;
    top: .4rem;
    color: #9e9e9e;
}

.btn1{
    margin: 0 auto;
    display: block;
    width: 6rem;
    background: #eee;
    color: #666;
    font-size: .3rem;
    height:.8rem;
    border: 0;
    border-radius: .2rem;
}
.resiger{
    margin: .2rem .2rem 0;
    font-size: .28rem;
}
.resiger a{
    color: #1991EB;
}

.foot{
    width: 100%;
    margin-top: 1rem;
    padding-bottom: 10em;
}
.xieyi{
    width: 100%;
    margin-top: .2rem;
    color:#888;
    font-size: .2rem;
}
.xieyi a{
    color: #1991EB;
    font-size: .23rem;
}
.login-Z{
    float: left;
    margin-top: 1rem;
    margin-left: 2rem;
    font-size: .25rem;
    color: #666;
}
.login-Z a{
    color: #1991EB;
    font-size: .23rem;
}
.password-Z{
    float: right;
    margin-right: 2rem;
    font-size: .25rem;
    color: #666;
}
.verification{
    margin-right: 0;
    height: 1.3rem;
    border-bottom: 1px solid #eee;
    position: relative;
}
.active{
    color: aqua;
}
.active1{
    color: red;
}


</style>