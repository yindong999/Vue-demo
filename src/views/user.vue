<template>
  <!-- 个人信息页面 -->
  <div>
    个人信息页面：params
    <br />
    姓名：{{$route.params.name?$route.params.name:$route.query.name}}
    年龄：{{$route.params.age?$route.params.age:$route.query.age}}
    <div @click="back" class="btn">返回</div>
    <div @click="back2" class="btn">返回上两级</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.back();
    },
    back2() {
      this.$router.go(-2);
    }
  }
};
</script>
<style lang='scss' scoped>
.btn {
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  width: 350px;
  background: red;
  cursor: pointer;
  margin: 10px auto;
}
</style>