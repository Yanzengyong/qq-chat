<template>
  <div>
    <div class="chat-room" v-move>
      <div class="head">
        <div class="info">
          <div class="avatar">
            <img src="static/images/avatar_group1.jpg">
          </div>
          <p class="name">百度前端学院交流群</p>
        </div>
        <div class="tools">
          <ul class="list">
            <li class="item" v-for="(item, index) in res.tools" :key="index">
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
        <div class="menu">
          <ul class="list">
            <li class="item" v-for="(item, index) in res.menu" :key="index">
              <img :src="item.src" :alt="item.name">
            </li>
          </ul>
        </div>
      </div>
      <div class="mainpanel">
        <div class="left">
          <div class="content"></div>
          <div class="message"></div>
        </div>
        <div class="right">
          <div class="notice container">
            <h2>群通知</h2>
            <div class="notice-null"><img src="" alt=""></div>
          </div>
          <div class="apps"></div>
          <div class="member"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { group } from '../../static/option/qq.js'
export default {
  data () {
    return {
      res: group
    }
  }
}
</script>
<style lang="scss" scoped>
.chat-room {
  position: relative;
  top: 10%;
  left: 30%;
  background: #d5e6f6;
  width: 620px;
  height: 620px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 1px #bbb;
  font-family: "Microsoft Yahei";
  z-index: 100;
  .head {
    position: absolute;
    width: 100%;
    height: 80px;
    cursor: default;
    border-bottom: 1px solid #ddd;
    .info {
      height: 35px;
      margin: 5px 0 0;
      .avatar {
        float: left;
        height: 35px;
        width: 35px;
        margin: 0 10px;
        border: 1px solid #c8d7e6;
        border-radius: 50%;
        overflow: hidden;
      }
      .name {
        display: inline-block;
        font-size: 18px;
        font-weight: 500;
        line-height: 35px;
        text-shadow: 0 0 0 #000; // 模拟字体加粗的效果，font-weight无法微调
      }
    }
    .tools {
      height: 30px;
      margin: 10px 0 0;
      .list {
        height: 100%;
        margin-left: 10px;
        .item {
          float: left;
          margin-right: 25px;
          color: #666;
        }
      }
    }
    .menu {
      position: absolute;
      right: 0;
      top: 0;
      .list {
        height: 30px;
        .item {
          float: left;
          margin-left: 0px;
          img {
            width: 29px;
            height: 29px;
          }
        }
      }
    }
  }
  .mainpanel {
    width: 100%;
    height: 100%;
    padding-top: 80px;
    .left {
      position: relative;
      width: auto;
      height: 100%;
      margin-right: 200px;
      border-right: 1px solid #ddd;
      .content {
        position: absolute;
        top: 80px;
        height: 410px;
        width: 100%;
        overflow-y: auto;
      }
      .message {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 130px;
        border-top: 1px solid #ddd;
        background: #d5e6f6;
      }
    }
    .right {
      position: absolute;
      top: 80px;
      right: 0;
      width: 200px;
      height: calc(100% - 80px);
      .container {
        padding: 0 10px;
      }
      .notice {
        margin: 5px 0;
        border-bottom: 1px solid #ccc;
        height: 160px;
        h2 {
          font-size: 15px;
          font-weight: 500;
          text-shadow: 0 0 0 #000;
        }
      }
      .apps {
      }
      .member {
      }
    }
  }
}
</style>
