<template>
  <div id="chat-room">
    <div class="head">
      <div class="info">
        <div class="avatar">
          <img :src="you.imgUrl" draggable="false">
          <p class="name">{{you.name}}</p>
          <p class="state">{{you.state}}</p>
        </div>
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
export default {
  data () {
    return {
      you: {
        name: '对方',
        state: '这里应该是状态',
        imgUrl: '',
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
    bottom:0;
    width: 100%;
    height: 110px;
    margin: 10px 0;
    border-top: 1px solid #ddd;
  }
}
</style>
