<template>
  <!-- 个人信息页面 -->
  <div>
    个人信息页面：query
    <br />
    姓名：{{$route.query.name}}
    年龄：{{$route.query.age}}
    <br />
 
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
</style>