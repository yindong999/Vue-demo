<template>
  <!-- 个人信息页面 -->
  <div>
    个人信息页面：
    <br />
    地址：{{$route.query.addr}}
    <br />
    电话：{{$route.query.tel}} =====
    <button @click="goback">返回</button>
    <br />前面的页面A使用的编程式路由router.replace方式进入本页面B，当使用router.go(-1)方式返回上一个页面A时，
    实际上并没有返回上一个A,而是返回了进入页面A时的前一个页面；
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang='scss' scoped>
</style>