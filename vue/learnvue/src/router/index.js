import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '@/views/user/index'
import Blog from '@/views/blog/index'

Vue.use(VueRouter)

const Home = { template: '<div>This Home page</div>' }
const Bbs = { template: '<div>This Bbs page</div>' }
// const User = { template: '<div>{{$route.params.userId}}</div>' }
const Learn = { template: '<div>This Learn page</div>' }
// const Blog = { template: '<div>This blog page</div>' }
const About = { template: '<div>This About page</div>' }
const Slider = { template: '<div style="float:left">This Slider page</div>' }
// const NotFound = { template: '<div>您访问的页面不存在，404，请你休息一会！</div>' }
let router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      alias: '/index',
      component: Home
    },
    {
      path: '/bbs',
      component: Bbs
    }, {
      path: '/learn',
      component: Learn
    }, {
      path: '/blog',
      components: {
        default: Blog,
        slider: Slider
      }
    },
    {
      path: '/user/:userId?/:xiaorong?', //?代表可写，也可以不写 /user/1
      component: User
    },
    {
      path: '/about',
      component: About
    }, {
      path: '*',
      // component: NotFound, //重定向
      redirect: (to) => {
      // return '/home'
      // console.log(to)
        if (to.path === '/123') {
          return '/home'
        } else if (to.path === '/stark') {
          return '/blog'
        } else {
          return '/bbs'
        }
      }
    }
  ]

})

export default router
