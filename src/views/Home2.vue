<template>
  <div class="home">
    主页面2:获取命名路由传递的参数，userId： {{$route.params.userId}}<br>
    使用别名也可以访问该页面；id:{{id}} <br>
    newsletterPopup:{{newsletterPopup}}<br>
    query:{{query}}<br>
    <div style="height:1000px;width:100%;border:1px solid red;"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  props:['id','newsletterPopup','query'],
  data(){
    return{

    }
  },
  components: {
    HelloWorld
  },
  created(){
    console.log(this.$route.params.userId)
  }
}
</script>
