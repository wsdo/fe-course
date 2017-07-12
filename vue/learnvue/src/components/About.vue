<template>
    <div class="hello">
    <div class="about">{{msg}}</div>
    <router-link to="{name:'About'}">学习</router-link>
    <router-link to="{name:'Work'}">工作</router-link>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: '这个是关于我的页面！！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
    font-size: 50px;
    color:red;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
