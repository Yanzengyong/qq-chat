<template>
  <div>
    <div id="chat-room">
      <div class="head">
        <div class="info">
          <div class="avatar">
            <img :src="you.avatar" draggable="false">
          </div>
          <p class="name">{{youName}}</p>
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
      <div class="content" ref="msgContent">
        <div class="container">
          <div class="read-more">
            <p>查看更多消息</p>
          </div>
          <div class="msg-panel">
            <div v-for="(item, index) in msgList" :class="['msg-item', item.who]" :key="index">
              <div class="avatar">
                <img v-if="item.who === 'you'" :src="you.avatar">
                <img v-else :src="me.avatar">
              </div>
              <div class="text">
                <p>{{item.text}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="message">
        <div class="tools">
          <ul class="list left">
            <li class="item" v-for="(item, index) in res.msgTools" :key="index">
              <img :src="item.src" :alt="item.name">
            </li>
          </ul>
          <div class="moremsg">
            <span>消息记录</span>
          </div>
        </div>
        <div class="textarea">
          <textarea class="msg-content" spellcheck="false" name="yourmsg" v-model="me.msg"></textarea>
          <div class="execute">
            <button class="btn" @click="sendMsg('me')">发送(S)</button>
            <button class="btn">关闭(C)</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      res: {
        tools: [
          {
            name: '音频',
            src: './static/images/tools/toobar_audio.png'
          },
          {
            name: '视频',
            src: './static/images/tools/toobar_video.png'
          },
          {
            name: '远程演示',
            src: './static/images/tools/toobar_screen_share.png'
          },
          {
            name: '传送文件',
            src: './static/images/tools/toobar_send.png'
          },
          {
            name: '远程控制',
            src: './static/images/tools/toobar_remote.png'
          },
          {
            name: '发起多人聊天',
            src: './static/images/tools/toobar_add.png'
          },
          {
            name: '应用',
            src: './static/images/tools/toobar_app.png'
          }
        ],
        menu: [
          {
            name: '设置',
            src: './static/images/menu/setting.png'
          },
          {
            name: '缩小',
            src: './static/images/menu/min.png'
          },
          {
            name: '放大',
            src: './static/images/menu/max.png'
          },
          {
            name: '关闭',
            src: './static/images/menu/close.png'
          }
        ],
        msgTools: [
          {
            name: '字体',
            src: './static/images/msg-tools/font.png'
          },
          {
            name: '表情',
            src: './static/images/msg-tools/face.png'
          },
          {
            name: 'GIF',
            src: './static/images/msg-tools/gif.png'
          },
          {
            name: '窗口抖动',
            src: './static/images/msg-tools/twitter.png'
          },
          {
            name: '语音消息',
            src: './static/images/msg-tools/record.png'
          },
          {
            name: '图片',
            src: './static/images/msg-tools/sendpic.png'
          },
          {
            name: '音乐',
            src: './static/images/msg-tools/music.png'
          },
          {
            name: '截图',
            src: './static/images/msg-tools/cut.png'
          },
          {
            name: '红包',
            src: './static/images/msg-tools/hb.png'
          }
        ],
        more: './static/images/tools/more.png'
      },
      you: {
        name: '夜喵。',
        avatar: './static/images/avatar_2.jpg',
        msg: '待发送的消息'
      },
      me: {
        name: '地瓜',
        avatar: './static/images/avatar_1.png',
        msg: '斯蒂芬'
      },
      msgList: [
        {
          text: '喵喵喵，喵？',
          who: 'you'
        },
        {
          text: '喵喵，喵喵喵？',
          who: 'me'
        },
        {
          text: '喵喵喵，喵喵喵喵喵喵喵？',
          who: 'you'
        },
        {
          text: '喵喵喵喵喵喵喵喵喵喵喵喵，喵喵……',
          who: 'me'
        },
        {
          text: '喵喵，喵喵喵，喵喵喵喵喵喵喵喵喵喵喵！！！',
          who: 'you'
        },
        {
          text: '喵喵喵，喵喵喵喵喵！',
          who: 'you'
        },
        {
          text: '喵，喵喵喵喵喵喵喵，喵喵喵喵喵喵喵……',
          who: 'me'
        },
        {
          text: '喵喵喵喵，喵喵喵喵喵喵喵喵？',
          who: 'you'
        },
        {
          text: '喵喵，喵喵喵喵喵喵喵喵',
          who: 'me'
        },
        {
          text: '喵，喵喵喵，喵喵喵喵喵喵喵喵',
          who: 'you'
        },
        {
          text: '喵喵，喵喵喵喵！！',
          who: 'me'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      youName: 'getYouName',
      youMsg: 'getYouMsg'
    })
  },
  watch: {
    youName (val) {
      this.you.name = val
    },
    youMsg (val) {
      this.msgList.push({
        text: val,
        who: 'you'
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.msgContent.scrollTop = this.$refs.msgContent.scrollHeight
    })
  },
  methods: {
    sendMsg () {
      this.msgList.push({
        text: this.me.msg,
        who: 'me'
      })
      this.me.msg = ''
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
            width: 29px;
            height: 29px;
          }
        }
      }
    }
  }
  .content {
    position: absolute;
    top: 80px;
    height: 410px;
    width: 100%;
    overflow-y: auto;
    &::-webkit-scrollbar {
      background: transparent;
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #bdbdbd;
      border-radius: 5px;
    }
    .container {
      width: auto;
      margin: 0 10px;
      .read-more {
        margin: 15px 0 20px;
        p {
          text-align: center;
          cursor: pointer;
          font-size: 15px;
          color: #2786e4;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .msg-panel {
        display: inline-block;
        height: 100%;
        width: 100%;
        .msg-item {
          width: 100%;
          min-height: 50px;
          margin: 10px 0;
          .avatar {
            position: relative;
            height: 30px;
            width: 30px;
            img {
              height: 30px;
              width: 30px;
              border-radius: 50%;
              cursor: pointer;
            }
          }
          .text {
            padding: 13px 10px;
            margin: 0 15px;
            border-radius: 6px;
            z-index: 500;
            p {
              font-size: 13px;
            }
          }
          &.you {
            float: left;
            .avatar {
              float: left;
              &::after {
                position: absolute;
                content: " ";
                bottom: 10px;
                right: -30px;
                width: 75%;
                height: 80%;
                border-bottom: 7px solid #d3d7de;
                border-left: 1px solid transparent;
                border-right: 10px solid transparent;
                border-radius: 50%/50%;
              }
            }
            .text {
              float: left;
              color: #000;
              background: #d3d7de;
            }
          }
          &.me {
            float: right;
            .avatar {
              float: right;
              &::after {
                position: absolute;
                content: " ";
                bottom: 10px;
                left: -30px;
                width: 75%;
                height: 80%;
                border-bottom: 7px solid #009bdb;
                border-left: 10px solid transparent;
                border-right: 1px solid transparent;
                border-radius: 50%/50%;
              }
            }
            .text {
              float: right;
              color: #fff;
              background: #009bdb;
            }
          }
        }
      }
    }
  }
  .message {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 130px;
    border-top: 1px solid #ddd;
    background: #d5e6f6;
    .tools {
      height: 25px;
      margin-top: 10px;
      .list {
        float: left;
        height: 100%;
        margin-left: 10px;
        .item {
          float: left;
          margin-right: 10px;
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
      .moremsg {
        float: right;
        margin-right: 10px;
        font-size: 13px;
        text-shadow: 0 0 0 #000;
      }
    }
    .textarea {
      height: calc(100% - 35px);
      margin: 0 5px;
      .msg-content {
        height: calc(100% - 35px);
        width: 100%;
        outline: none;
        resize: none;
        border: none;
        background: transparent;
        font-family: "Microsoft Yahei";
        font-size: 14px;
        font-weight: 500;
        text-shadow: 0 0 0 #000;
        &::-webkit-scrollbar {
          background: transparent;
          width: 10px;
          &:hover {
            border-radius: 5px;
          }
        }
        &::-webkit-scrollbar-thumb {
          background-color: #bdbdbd;
          border-radius: 5px;
          &:hover {
          }
        }
      }
      .execute {
        height: 35px;
        margin-right: 5px;
        .btn {
          float: right;
          background: #069dd5;
          color: #fff;
          font-size: 12px;
          border: none;
          outline: none;
          padding: 4px 15px;
          border-radius: 3px;
          margin-left: 5px;
          &:hover {
            background: #4bcaff;
          }
          span {
          }
        }
      }
    }
  }
}
</style>
