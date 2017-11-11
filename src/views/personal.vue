<template>
  <div>
    <div class="chat-room" v-move>
      <div class="head">
        <div class="info">
          <div class="avatar">
            <img :src="youAvatar" draggable="false">
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
              <p class="time">{{ $moment(item.time).format('YYYY/MM/DD HH:mm:ss') }}</p>
              <div class="msg">
                <div class="avatar">
                  <img v-if="item.who === 'you'" :src="youAvatar">
                  <img v-else :src="meAvatar">
                </div>
                <div class="text">
                  <p>{{item.text}}</p>
                </div>
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
import chatMsg from '../../static/option/chat.js'
import { personal } from '../../static/option/qq.js'
export default {
  data () {
    return {
      res: personal,
      you: {
        name: '夜喵。'
      },
      me: {
        name: '地瓜',
        msg: '喵？'
      },
      msgList: chatMsg
    }
  },
  computed: {
    ...mapGetters({
      youName: 'getYouName',
      youAvatar: 'getYouAvatar',
      youMsg: 'getYouMsg',
      meAvatar: 'getMeAvatar'
    })
  },
  watch: {
    youName (val) {
      this.you.name = val
    },
    youMsg (val) {
      this.msgList.push({
        text: val,
        who: 'you',
        time: this.$moment().unix() * 1000
      })
    },
    msgList (val) {
      this.scrollBottom()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scrollBottom()
    })
  },
  methods: {
    sendMsg () {
      this.msgList.push({
        text: this.me.msg,
        who: 'me',
        time: this.$moment().unix() * 1000
      })
      this.me.msg = ''
    },
    scrollBottom () {
      setTimeout(() => {
        this.$refs.msgContent.scrollTop = this.$refs.msgContent.scrollHeight
      })
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
          margin: 10px 0 0;
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
          .time {
            text-align: center;
            font-size: 12px;
            color: #aaa;
            margin: 10px 0;
          }
          .msg {
            .avatar {
              position: relative;
              height: 30px;
              width: 30px;
              img {
                height: 30px;
                width: 30px;
                border-radius: 50%;
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
