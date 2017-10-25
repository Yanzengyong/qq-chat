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
              <input type="text" placeholder="昵称">
            </li>
            <li class="config-item">
              <input type="text" placeholder="头像">
            </li>
            <li class="config-item">
              <input type="text" placeholder="输入一条新消息">
            </li>
            <li class="config-item">
              <button>发送</button>
            </li>
          </ul>
        </div>
        <div class="config-panel">
          <h1>自己</h1>
          <ul class="config-list">
            <li class="config-item">
              <input type="text" placeholder="昵称">
            </li>
            <li class="config-item">
              <input type="text" placeholder="头像">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      routeList: [
        {
          label: 'QQ',
          name: 'qq'
        },
        {
          label: 'TIM',
          name: 'tim'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.bg {
  background-image: linear-gradient(left top, #759adb, #2ecad0);
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
            input {
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
                opacity: .7;
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
        }
      }
    }
  }
}
</style>
