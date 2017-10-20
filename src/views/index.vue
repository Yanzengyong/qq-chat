<template>
  <div id="chat-room">
    <div class="head">
      <div class="info">
        <div class="avatar">
          <img :src="you.imgUrl" draggable="false">
        </div>
        <p class="name">{{you.name}}</p>
      </div>
      <div class="menu">
        <div class="item close"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <div class="tools">
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
    <div class="content">
      <div class="container">
        <div class="read-more">
          <p>查看更多消息</p>
        </div>
        <div class="msg-panel">
        </div>
      </div>
    </div>
    <div class="message">
      <div class="tools"></div>
      <div class="textarea"></div>
      <div class="execute"></div>
    </div>
  </div>
</template>
<script>
import youImg from '@/assets/images/avatar_2.jpg'
export default {
  data () {
    return {
      you: {
        name: '夜喵。',
        imgUrl: youImg,
        msg: '待发送的消息'
      },
      me: {
        imgUrl: '',
        msg: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
#chat-room {
  position: relative;
  top: 80px;
  left: 10%;
  background: #d5e6f6;
  width: 620px;
  height: 620px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 1px #bbb;
  z-index: 100;
  .head {
    position: absolute;
    width: 100%;
    height: 80px;
    cursor: default;
    border-bottom: 1px solid #ddd;
    .info {
      height: 35px;
      margin: 5px 0;
      .avatar {
        float: left;
        height: 35px;
        width: 35px;
        margin: 0 10px;
        border: 1px solid #c8d7e6;
        border-radius: 50%;
        overflow: hidden;
        img {
        }
      }
      .name {
        display: inline-block;
        font-size: 18px;
        font-weight: 500;
        line-height: 35px;
        text-shadow: 0 0 0 #000; // 模拟字体加粗的效果，font-weight无法微调
      }
    }
  }
  .content {
    position: absolute;
    top: 80px;
    height: 430px;
    width: 100%;
    overflow-y: scroll;
  }
  .message {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 110px;
    margin: 10px 0;
    border-top: 1px solid #ddd;
  }
}
</style>
