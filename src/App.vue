<template>
  <div id="app">
    <div class="wrapper">
      <Header/>
      <router-view name="main"></router-view>
      <router-view name="sidebar"></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  width: 1280px;
  margin: 0 auto;
}
</style>

