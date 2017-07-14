<template>
    <div>
      blog page
      <div v-for="item in data"> {{item.goods_name}}</div>
    </div>
</template>

<script>
  import jsonp from 'jsonp'
  
  export default {
    name: 'blog',
    data () {
      return {
        data: {}
      }
    },
    created () {
      this.getGoods()
      this.getJsonp()
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
