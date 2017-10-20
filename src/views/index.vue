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

</style>
