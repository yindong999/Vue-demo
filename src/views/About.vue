<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/about/childOne" class="txt">子路由一</router-link>|
    <router-link to="/about/childTwo" class="txt">子路由二</router-link>
    
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
  .v-enter{ // v-enter：定义进入过渡的开始状态。元素被插入之前生效，在元素被插入之后的下一帧移除 
  transition: all .5s ease;
  transform: translateX(100%);
}
.v-leave-to{ // v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态
  transition: all .5s ease;
  opacity: 0;
  transform: translateX(-100%);
  position:absolute;
}
.v-leave-active,.v-enter-active{ // v-enter-active：定义进入过渡生效时的状态
                                // v-leave-active：定义离开过渡生效时的状态
   transition: all .5s ease;
}
.router-link-exact-active{
  color:blue;
}
.txt{
  font-weight: 600;
  font-size:18px;}
</style>
