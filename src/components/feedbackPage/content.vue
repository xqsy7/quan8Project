<template>
  <div class="content">
    <div class="feedback-type">
      <p>反馈类型</p>
      <ul>
        <li>9.9包邮</li>
        <span>/</span>
        <li>咚咚抢</li>
        <span>/</span>
        <li>每日半价</li>
        <span>/</span>
        <li>综合反馈</li>
        <span>/</span>
      </ul>
    </div>
    <div class="err-world">
      <p>错误描述</p>
      <div class="feed-centent-main">
        <textarea
          name="content"
          id
          maxlength="400"
          cols="30"
          ref="textareaContent"
          placeholder="请在此输入您的反馈意见"
          value
          rows="10"
        ></textarea>
      </div>
      <span class="max-text">
        最多输入
        <b>400</b>字，超出则反馈无效
      </span>
    </div>
    <div class="contact-information">
      <section class="feed-contact" style="margin-bottom: 80px">
        <input type="text" ref="inputContent" value="" maxlength="50" placeholder="请在此输入您QQ号或邮箱" name="qq" />
        <p class="thanks-word">您的宝贵建议是我们前进的动力，真诚感谢您！</p>
      </section>
    </div>
    <div class="feed-submit">
      <button
        @click="submitHandler()"
        class="disabled"
        data-action="/index.php?r=index/feedbacksave"
        type="button"
      >提交</button>
    </div>
  </div>
</template>
<script>
import MessageBox from "@lib/messageBox/index.js";
export default {
  name: "Content",
  methods: {
    submitHandler() {
    if(!this.$refs.textareaContent.value){
        MessageBox.init({
          title: "通知",
          content: "请填写反馈内容"
        });
    }else if(!this.$refs.inputContent.value){
         MessageBox.init({
          title: "通知",
          content: "请填写联系方式"
        });
    }else{
         MessageBox.init({
          title: "通知",
          content: "反馈成功"
        });
         this.$refs.textareaContent.value = "";
        this.$refs.inputContent.value = "";
    }
    }
  }
};
</script> 
          
<style scoped>
.feedback-type {
  position: absolute;
  top: 70px;
  width: 100%;
}
.feedback-type > p {
  margin-left: 30px;
  margin-bottom: 5px;
  display: block;
  font-size: 12px;
  line-height: 20px;
  height: 20px;
  color: rgb(134, 128, 128);
}
.feedback-type > ul {
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  height: 60px;
  width: 95%;
  overflow: hidden;
  border-bottom: 1px solid rgb(224, 219, 219);
}

.feedback-type > ul > li {
  border-radius: 3px;
  margin: 0 10px;
  overflow: hidden;
  border: 1px solid #9e9e9e;
  font-size: 12px;
  display: inline-block;
  color: #9e9e9e;
  width: 20%;
  height: 26px;
  line-height: 26px;
  text-align: center;
}
.feedback-type > ul > span {
  color: rgb(247, 164, 10);
  position: relative;
  top: 1000px;
  left: -18px;
  /* display:inline-block; */
  height: 8px;
  width: 8px;
  background: #9e9e9e;
}
.feedback-type > ul li:hover {
  border: 1px solid rgb(247, 164, 10);
}
.feedback-type > ul:hover span {
  top: 0px;
}
.err-world {
  position: absolute;
  top: 170px;
  margin-left: 30px;
  margin-bottom: 5px;
  display: block;
  font-size: 12px;
  line-height: 20px;
  height: 280px;
  color: #666;
  width: 92%;
  border-bottom: 1px solid rgb(224, 219, 219);
}
.err-world .feed-centent-main {
  width: 100%;
  height: 197px;
  overflow: hidden;
  background: #fcfafc;
  border: 1px solid #ddd;
  border-radius: 2px;
  position: relative;
}
.err-world .feed-centent-main textarea {
  border: 1px solid #9e9e9e;
  width: 100%;
  height: 200px;
  background: 0 0;
  position: relative;
  padding: 8px 4px 0 8px;
  font-size: 14px;
  box-sizing: border-box;
  outline: 0;
  border: none;
  line-height: 16px;
  color: #666;
  font-family: "Microsoft YaHei";
}
.err-world > span {
  position: absolute;
  /* bottom: px; */
  right: 8px;
  color: #999;
  font-size: 12px;
}
.err-world > span > b {
  color: rgb(230, 83, 30);
}
.contact-information {
  position: absolute;
  top: 500px;
  margin-left: 30px;
  width: 92%;
}
.contact-information > section {
  display: block;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: #eee 1px solid;
  margin-bottom: 20px;
  position: relative;
}
.contact-information .feed-contact > input {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-radius: 2px;
  margin-bottom: 18px;
  padding: 0 8px;
  box-sizing: border-box;
  background: #fcfafc;
  border: 1px solid #ddd;
  color: #666;
}
.contact-information .thanks-word {
  color: #9e9e9e;
  font-size: 12px;
  margin: 0;
  padding: 0;
}
.feed-submit {
  position: absolute;
  top: 620px;
  left: 40px;
  width: 92%;
  display: block;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  margin-left: -13px;
  padding: 0 13px 20px;
  box-sizing: border-box;
  background: #fff;
  text-align: center;
}
.feed-submit .disabled {
  /* background: #FE4A65; */
  display: block;
  width: 100%;
  text-align: center;
  color: #fff;
  letter-spacing: 11px;
  text-indent: 10px;
  height: 45px;
  border-radius: 2px;
  font-size: 20px;
  padding: 0 13px;
}
.feed-submit .disabled:hover {
  color: rgb(230, 83, 30);
}
</style>