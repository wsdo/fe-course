<template>
    <div>
      Content page

      <div v-for="item in data"> {{item.goods_name}}</div>

      <!-- <swipe/> -->
    </div>
</template>

<script>
  import jsonp from 'jsonp'
  import Vue from 'vue'
  import VueAwesomeSwiper from 'vue-awesome-swiper'
  Vue.use(VueAwesomeSwiper)
  import Swipe from '@/components/Swipe'
  export default {
    name: 'Stark',
    data () {
      return {
        data: {}
      }
    },
    created () {
      this.getGoods()
      this.getJsonp()
    },
    components:{
        swipe:Swipe
      },
    methods: {
      getGoods () {
        this.$http.get('http://lc.shudong.wang/api_goods.php')
          .then((res) => {
            this.data = res.data.data
          })
          .catch((error) => {
            console.log(error)
          })
      },
      getJsonp () {
        jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su', null, function (err, data) {
          if (err) {
            console.error(err.message);
          } else {
            console.log(data);
          }
        });

      }
    }
  }
</script>
