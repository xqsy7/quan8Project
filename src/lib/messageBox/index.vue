<template>
    <div class="messageBox_container">
    <div class="messageBox_title">
     {{title}}
    </div>
    <div class="messageBox_content">
        {{content}}
    </div>
    <div class="messageBox_btn" >
    <div class="ok" @click="handleConfirm()">确认</div>
    </div>
    </div>
</template>
<script>
export default {
    nema:"MessageBox",
    
}
</script>
<style scoped>
.messageBox_container{
    width: 5.12rem;
    height:3.18rem;
    position:absolute;
    background: white;
    /* left:0;
    top:0;
    bottom:0;
    right:0;
    margin:auto; */

    position: absolute;
    z-index:200;
    left:50%;
    top:50%;
    margin-left: -2.56rem;
    margin-top:-1.59rem;
    display:flex;
    flex-direction: column;
}
.messageBox_title{
    background:#F8F8F8;
    padding:0 .8rem 0 .2rem;
    height:.86rem;
    line-height:.86rem;
    font-size:.3rem; 
    /* color:#9e9e9e; */
    /* text-align:center; */
}
.messageBox_content{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex:1;
    font-size:.3rem;
}
.messageBox_btn{
    background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
    height:.8rem;
    display:flex;
    font-size:.3rem;
    justify-content: center;
    align-items:center;
    border-top:1px solid #9e9e9e;
    
}
.messageBox_btn div{
    width:100%;
    height:100%;
    color:white;
    text-align:center;
    line-height:.8rem;
    font-size:.3rem;
}
</style>