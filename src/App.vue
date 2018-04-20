<template>
  <div id="app">
    <div class="wrapper">
      <Header/>
      <main class="main-content">
        <router-view name="main"></router-view>
        <router-view name="sidebar"></router-view>
      </main>
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
.main-content {
  display: flex;
}
</style>

