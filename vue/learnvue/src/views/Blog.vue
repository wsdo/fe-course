<template>
      <div>
        <stark/>
        <artlce/>
      </div>
</template>
<script>

  import Artlce from '@/views/blog/Artlce' 
  import Stark from '@/views/blog/Stark' 

  export default {
    name:'blog',
    components:{
      artlce:Artlce,
      stark:Stark
    }
  }
</script>