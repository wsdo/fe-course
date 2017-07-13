import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = { template: '<div>This Home page</div>' }
const Bbs = { template: '<div>This Bbs page</div>' }
const Learn = { template: '<div>This Learn page</div>' }
const Blog = { template: '<div>This blog page</div>' }
const About = { template: '<div>This About page</div>' }
let router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/home',
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
      component: Blog
    }, {
      path: '/about',
      component: About
    }
  ]
})

export default router
