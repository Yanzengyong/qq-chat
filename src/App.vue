<template>
  <div id="app">
    <router-view class="app-main"></router-view>
    <side-bar class="app-sidebar"></side-bar>
  </div>
</template>

<script>
import sideBar from '@/components/sidebar'
export default {
  name: 'app',
  components: {
    sideBar
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  .app-main {
    float: left;
    height: 100%;
    width: 80%;
  }
  .app-sidebar {
    margin-left: 80%;
    height: 100%;
    width: 20%
  }
}
</style>
