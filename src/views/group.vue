<template>
  <div>
    <div class="chat-room" v-move>
      <div class="head"></div>
      <div class="mainpanel">
        <div class="left">
          <div class="content"></div>
          <div class="message"></div>
        </div>
        <div class="right">
          <div class="notice"></div>
          <div class="apps"></div>
          <div class="member"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.chat-room {
  position: relative;
  top: 80px;
  left: 10%;
  background: #d5e6f6;
  width: 620px;
  height: 620px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 1px #bbb;
  font-family: "Microsoft Yahei";
  z-index: 100;
}
</style>
