vue.js-是什么

官网：
vuejs.org

中文网
https://cn.vuejs.org/

https://router.vuejs.org/zh-cn/

api
router
组件
指令
项目脚手架搭建

可以是看https://github.com/vuejs/vue/releases 每次更新了什么
v.1.0.0

官方仓库
https://github.com/vuejs

 资源列表
 https://github.com/vuejs/awesome-vue

 饿了吗官方出的ui框架
 http://element.eleme.io/#/zh-CN


项目：
基于Vue模仿蘑菇街的单页应用http://andylei18.github.io/vue-shopping/
https://github.com/andylei18/vue-shopping

注意只有这些被代理的属性是响应的。如果在实例创建之后添加新的属性到实例上，它不会触发视图更新。我们将在后面详细讨论响应系统。
除了 data 属性， Vue 实例暴露了一些有用的实例属性与方法。这些属性与方法都有前缀 
可以在控制台尝试使用  vm.msg = "stark";

```
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})
vm.$data === data // -> true
vm.$el === document.getElementById('example') // -> true
// $watch 是一个实例方法
vm.$watch('a', function (newVal, oldVal) {
  // 这个回调将在 `vm.a`  改变后调用
})
```