<template>
    <div>
        <navbar> </navbar>
        <!-- router-link -->

        <router-view class="text-center" name="slider"></router-view>
        <router-view class="text-center"></router-view>
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar' 
  export default {
    name: 'app',
    data() {
      return {
          username: 'stark'
      }
    },
    components:{
        navbar:Navbar
    }
  }
</script>

<style>

</style>