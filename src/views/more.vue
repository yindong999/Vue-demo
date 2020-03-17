<template>
  <!-- 多个匹配的路径会映射到该页面 -->
  <div>
    多个匹配的路径会映射到该页面，当前页面的id:
    {{id}}===={{$route.params.id}}
    <div @click="goto" class="btn">点击跳转个人信息页面,name跳转，params方式传参</div><br>
    <div @click="goto2" class="btn">点击跳转个人信息页面,path跳转，query方式传参</div>
    注：name跳转，params方式传参，参数不显示在url中；
    path跳转，query方式传参，参数会显示在url中
  </div>
</template>
<script>
export default {
  data() {
    return {id:'无'};
  },
  created(){
      this.id = this.$route.params.id
      console.log(this.$route)
  },
  methods:{
      goto(){
          this.$router.push({name:'user',params:{name:'梨花',age:23}})
      },
      goto2(){
          this.$router.push({path:'/user2',query:{name:'海棠',age:22}})
      }
  },
};
</script>
<style lang='scss' scoped>
.btn{
    height:40px;
    line-height: 40px;
    border-radius:10px;
    width:350px;
    background:red;
    cursor: pointer;
    margin:0 auto;
}
</style>