<template>
  <div>
    这是主页
    <swipe/>
  </div>
</template>

<script>
    import Vue from 'vue'
    import VueAwesomeSwiper from 'vue-awesome-swiper'
    Vue.use(VueAwesomeSwiper)
    import Swipe from '@/components/Swipe'

    export default {
      name: 'home',
      data() {
        return {
            username: 'stark'
        }
      },
      components:{
        swipe:Swipe
      }
    }
</script>