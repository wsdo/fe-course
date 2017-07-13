<template>
    <div>
      blog page
      <div v-for="item in data"> {{item.goods_name}}</div>
    </div>
</template>

<script>
  export default {
    name: 'blog',
    data () {
      return {
        data: {}
      }
    },
    created () {
      this.getGoods()
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
      }
    }
  }
</script>
