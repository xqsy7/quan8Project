<template>
  <div class="group-top">
    <div class="box"></div>
    <div class="top-line">
      <div class="left">
        <img src="img/youhuitop.png" alt />
      </div>
      <div class="wrapper" ref="wrapper">
        <div class="content">
            <div v-for="(item,index) in lineData" :key="index" class="right content">
          <a href class="text-a">
            <div>
              <p class="text-p">
                <span>{{item.tag}}</span>
                {{item.name}}
              </p>
            </div>
            <em>&gt;</em>
          </a>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@utils/http";
import { groupTop } from "@api";
import BScroll from "better-scroll";
export default {
  name: "GroupTop",
  data() {
    return {
      lineData: []
    };
  },
  async created() {
    let data = await groupTop();
    this.lineData = data.data.config.list;
  },
  mounted() {
    let scroll = new BScroll(this.$refs.wrapper, {
      scrollY: true,
      scrollY: 0,
    //   click: true
    });
  }
};
</script>

<style scoped>
.group-top {
  position: relative;
  top: 7.5rem;
  height: 0.8rem;
}
.box {
  height: 1px;
  background: #efefef;
  width: 100%;
}
.top-line {
  height: 100%;
  width: 95%;
  display: flex;
  align-items: center;
  background: #fff;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  border-radius: 0 0 0.1rem 0.1rem;
}
.left {
  width: 1.08rem;
  height: 0.28rem;
  margin: -0.08rem 0.24rem 0;
}
.left img {
  width: 100%;
  height: 100%;
}
.right {
  height: 0.2rem;
  width: 2.8rem;
  position: relative;
  z-index: 1;
  zoom: 1;
  top: 0.04rem;
  overflow: hidden;
}
.wrapper {
  margin-left: 1rem;
  width: 5rem;
  height: 0.3rem;
}
.text-a {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text-p {
  line-height: 0.14rem;
  box-sizing: border-box;
  padding: 0.02rem;
  font-size: 0.2rem;
}
.text-p span {
  display: inline-block;
  min-width: 0.48rem;
  padding: 0 0.1rem;
  height: 0.24rem;
  background: linear-gradient(90deg, #ff9676 0, #ff7913 100%);
  border-radius: 0.07rem;
  font-size: 0.2rem;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #fff;
  line-height: 0.24rem;
  margin-right: 0.08rem;
}
.text-p em {
  font-size: 0.2rem;
  font-weight: 400;
}
</style>