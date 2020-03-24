<template>
  <div>
    嵌套命名视图（该页面有三个视图）
    <router-view />
    <!-- 重新命名的视图a -->
    <router-view class="view two" name="a"></router-view>
    <!-- 重新命名的视图b -->
    <router-view class="view three" name="b"></router-view>
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