<template>
  <div class="bg">
    <div class="container">
      <div class="route-panel">
        <router-link v-for="(item, index) in routeList" :key="index" :to="item.name" active-class="active">{{item.label}}</router-link>
      </div>
      <div class="config">
        <div class="config-panel">
          <h1>对方</h1>
          <ul class="config-list">
            <li class="config-item">
              <input type="text" placeholder="昵称" v-model="youName">
            </li>
            <li class="config-item avatar">
              <span>头像：</span>
              <img :src="youAvatar">
              <label class="avatar-mask" for="youAvatar">
                <span>修改头像</span>
              </label>
              <input type="file" id="youAvatar" @change="updateYouAvatar">
            </li>
            <li class="config-item">
              <input type="text" placeholder="输入一条新消息" v-model="youMsg">
            </li>
            <li class="config-item">
              <button @click="sendMsg('you')">发送</button>
            </li>
          </ul>
        </div>
        <div class="config-panel">
          <h1>自己</h1>
          <ul class="config-list">
            <li class="config-item">
              <input type="text" placeholder="昵称">
            </li>
            <li class="config-item avatar">
              <span>头像：</span>
              <img :src="myAvatar">
              <label class="avatar-mask" for="myAvatar">
                <span>修改头像</span>
              </label>
              <input type="file" id="myAvatar" @change="updateMyAvatar">
            </li>
          </ul>
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
      routeList: [
        {
          label: '个人版',
          name: 'personal'
        },
        {
          label: 'QQ群',
          name: 'group'
        }
      ],
      youMsg: '',
      youAvatar: './static/images/avatar_2.jpg',
      myAvatar: './static/images/avatar_1.png'
    }
  },
  computed: {
    ...mapGetters(['getYouName']),
    youName: {
      get: function () {
        return this.getYouName
      },
      set: function (val) {
        console.log(val)
        if (val === '地瓜') {
          val = '对不起，不能修改为主人的名字'
        }
        this.$store.dispatch('updateYouName', val)
      }
    }
  },
  methods: {
    sendMsg (who) {
      this.$store.dispatch('updateYouMsg', this.youMsg)
      this.youMsg = ''
    },
    updateYouAvatar (event) {
      let reader = new FileReader()
      let avatar = event.target.files[0]
      reader.readAsDataURL(avatar)
      reader.onloadend = () => {
        this.youAvatar = reader.result
        this.$store.dispatch('updateYouAvatar', reader.result)
      }
    },
    updateMyAvatar (event) {
      let reader = new FileReader()
      let avatar = event.target.files[0]
      reader.readAsDataURL(avatar)
      reader.onloadend = () => {
        this.myAvatar = reader.result
        this.$store.dispatch('updateMeAvatar', reader.result)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.bg {
  background-image: linear-gradient(left top, #759adb, #2ecad0);
  background-image: -webkit-linear-gradient(left top, #759adb, #2ecad0);
  .container {
    height: 100%;
    width: 80%;
    padding: 5% 0;
    margin: 0 10%;
    .route-panel {
      height: 50px;
      width: 100%;
      a {
        display: inline-block;
        width: 50%;
        text-align: center;
        color: #fff;
        text-decoration: none;
        &.active {
          border-bottom: 1px solid #fff;
        }
      }
    }
    .config {
      width: 100%;
      .config-panel {
        display: inline-block;
        width: 100%;
        margin-top: 20px;
        margin-bottom: 20px;
        h1 {
          font-size: 2em;
          color: #fff;
          font-weight: lighter;
        }
        .config-list {
          margin: 10px 0;
          .config-item {
            margin: 20px 0;
            input[type="text"] {
              width: 100%;
              height: 30px;
              line-height: 30px;
              background: transparent;
              border: none;
              border-bottom: 1px solid #fff;
              outline: none;
              color: #fff;
              &::-webkit-input-placeholder {
                color: #ffffff;
                opacity: 0.7;
              }
            }
            button {
              height: 30px;
              width: 80px;
              border: 1px solid #fff;
              background: transparent;
              color: #fff;
              cursor: pointer;
            }
          }
          .avatar {
            position: relative;
            height: 80px;
            span {
              display: block;
              font-size: 14px;
              float: left;
              color: #fff;
            }
            img {
              position: absolute;
              left: 60px;
              width: 80px;
              height: 80px;
              border-radius: 50%;
            }
            .avatar-mask {
              position: absolute;
              left: 60px;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 80px;
              width: 80px;
              border-radius: 50%;
              cursor: pointer;
              span {
                display: none;
              }
              &:hover {
                background: rgba(0, 0, 0, 0.5);
                span {
                  display: block;
                }
              }
            }
            input[type="file"] {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>
