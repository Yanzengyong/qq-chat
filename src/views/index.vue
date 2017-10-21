<template>
  <div id="chat-room">
    <div class="head">
      <div class="info">
        <div class="avatar">
          <img :src="you.imgUrl" draggable="false">
        </div>
        <p class="name">{{you.name}}</p>
      </div>
      <div class="tools">
        <ul class="list">
          <li class="item" v-for="(item, index) in res.tools" :key="index">
            <img :src="item.src" :alt="item.name">
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
      res: {
        tools: [
          {
            name: '音频',
            src: '/static/images/tools/toobar_audio.png'
          },
          {
            name: '视频',
            src: '/static/images/tools/toobar_video.png'
          },
          {
            name: '远程演示',
            src: '/static/images/tools/toobar_screen_share.png'
          },
          {
            name: '传送文件',
            src: '/static/images/tools/toobar_send.png'
          },
          {
            name: '远程控制',
            src: '/static/images/tools/toobar_remote.png'
          },
          {
            name: '发起多人聊天',
            src: '/static/images/tools/toobar_add.png'
          },
          {
            name: '应用',
            src: '/static/images/tools/toobar_app.png'
          }
        ],
        menu: [
          {
            name: '设置',
            src: '/static/images/menu/set.png'
          },
          {
            name: '缩小',
            src: '/static/images/menu/min.png'
          },
          {
            name: '放大',
            src: '/static/images/menu/max.png'
          },
          {
            name: '关闭',
            src: '/static/images/menu/close.png'
          }
        ]
      },
      you: {
        name: '夜喵。',
        imgUrl: '/static/images/avatar_2.jpg',
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
      margin: 5px 0 0;
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
    .tools {
      height: 30px;
      margin: 10px 0 0;
      .list {
        height: 100%;
        margin-left: 10px;
        .item {
          float: left;
          margin-right: 10px;
          img {
            width: 22px;
            height: 22px;
          }
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
            width: 30px;
            height: 30px;
          }
        }
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
