<template>
  <!-- 这是在一个路由中设置多段“路径参数”映射的页面 -->
  <div>
      这是在一个路由中设置多段“路径参数”映射的页面:
      用户名：{{$route.params.username}}
      密码：{{$route.params.password}}
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created(){
      console.log("this.$router",this.$router)
      console.log("this.$route",this.$route)
  }
};
</script>
<style lang='scss' scoped>
</style>