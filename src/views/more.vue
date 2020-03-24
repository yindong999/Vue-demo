<template>
  <!-- 多个匹配的路径会映射到该页面 -->
  <div>
    多个匹配的路径会映射到该页面，当前页面的id:
    {{id}}===={{$route.params.id}}
    <div @click="goto" class="btn">点击跳转个人信息页面,name跳转，params方式传参</div>
    <br />
    <div @click="goto2" class="btn">点击跳转个人信息页面,path跳转，query方式传参</div>注：name跳转，params方式传参，参数不显示在url中；
    path跳转，query方式传参，参数会显示在url中
    <br />
    <div @click="goto3" class="btn">router.replace</div>
    <br />Vue Router的导航方法（push,replace,go）在各类路由模式（history,hash,abstract）下是一样的；
  </div>
</template>
<script>
export default {
  data() {
    return { id: "无" };
  },
  watch: {
    $route(to, from) {
      // 想对路由参数的变化作出响应的话，你可以简单地 watch (监测变化) $route 对象
      console.log(to, from);
    }
  },
  created() {
    this.id = this.$route.params.id;
  },
  // 组件内守卫beforeRouteEnter,beforeRouteUpdate,beforeRouteLeave
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter", to, from);
    // 在渲染该组件对应的路由被confirm前调用，该守卫内拿不到 this,
    // 因为守卫执行前，组件实例还没有被创建
    next();
  },
  beforeRouteUpdate(to, from, next) {
    //  在当前路由改变，该组件被复用时调用，可以访问组件实例 `this`
    console.log("beforeRouteUpdate", to, from);
    next(); // 记得next()
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave", to, from);
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    next();
  },
  methods: {
    goto() {
      this.$router.push({ name: "user", params: { name: "梨花", age: 23 } });
    },
    goto2() {
      this.$router.push({ path: "/user2", query: { name: "海棠", age: 22 } });
    },
    goto3() {
      // 使用router.replace编程式路由进行页面跳转；替换掉当前的history记录,与 router.push的区别是不会向history添加新纪录；
      this.$router.replace({
        path: "/user3",
        query: { addr: "北京朝阳", tel: "123456" }
      });
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
  margin: 0 auto;
}
</style>