import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'

Vue.use(Router)
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Study = { template: '<div>这是我学习的东西嘿嘿！！！</div>' }
const Work = { template: '<div>这是我工作的内容哈哈哈，很辛苦的！！！</div>' }

export default new Router({
  mode: 'history', // 默认是hash模式 带着#号，如果不想带#号请切换 history
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    {
      path: '/about',
      component: About,
      children: [
        {
          path: '',
          name: 'About',
          component: Study
        },
        {
          path: '/work',
          name: 'Work',
          component: Work
        }
      ]
    }
  ]
})
