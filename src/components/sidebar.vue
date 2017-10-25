<template>
  <div class="bg">
    <div class="container">
      <div class="route-panel">
        <ul>
          <li v-for="(item, index) in routeList" :key="index">{{item.label}}</li>
        </ul>
      </div>
      <div class="config">
        <div class="config-panel">
          <h1>对方</h1>
          <ul class="config-list">
            <li class="config-item">
              <label for="">昵称</label>
              <input type="text" placeholder="昵称">
            </li>
            <li class="config-item">
              <label for="">头像</label>
              <input type="text" placeholder="头像">
            </li>
            <li class="config-item">
              <label for="">输入一条新消息</label>
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
              <label for="">昵称</label>
              <input type="text" placeholder="昵称">
            </li>
            <li class="config-item">
              <label for="">头像</label>
              <input type="text" placeholder="头像">
            </li>
            <p>在消息窗内发送新消息</p>
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
          link: '/index'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
