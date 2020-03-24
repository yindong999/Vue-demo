<template>
  <div class="home">
    主页面2:获取命名路由传递的参数，userId： {{$route.params.userId}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created(){
    console.log(this.$route.params.userId)
  }
}
</script>
