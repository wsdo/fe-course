<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-link to="/foo">哈哈</router-link>
    <router-link to="/bar">呵呵</router-link>
    <router-link to="/about">关于我的页面</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
