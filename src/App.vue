<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">主页</router-link> | 
      <router-link to="/about">关于</router-link> | 
      <router-link to="/user/more">更多1</router-link> |
      <router-link to="/user/more2">更多2</router-link> |
      <router-link to="/user/zhagnsan/even/123">张三</router-link> |
      <router-link to="/user/lisi/even/456">李四</router-link> |
      <router-link to="/my">我的信息</router-link> |
      <router-link :to="{name:'Home2',params: { userId: 123 }}" class="txt">命名路由</router-link> |
      <router-link :to="{path:'/nestNamedView'}" class="txt">嵌套命名视图</router-link> |
      <router-link :to="{path:'/b'}" class="txt">别名</router-link> |<br>
      <router-link :to="{path:'/props/123'}" class="txt">使用props让组件和路由解耦（布尔模式）</router-link> |
      <router-link :to="{path:'/props2'}" class="txt">使用props让组件和路由解耦（对象模式）</router-link> |
      <router-link :to="{path:'/props3?q=123456'}" class="txt">使用props让组件和路由解耦（函数模式）</router-link> |
      <router-link to="/benbaobao">本宝宝</router-link> |
    </div>
    <transition>
      <router-view />     
    </transition>
  </div>
</template>

<style lang="scss">
 
.v-enter {
  // v-enter：定义进入过渡的开始状态。元素被插入之前生效，在元素被插入之后的下一帧移除
  transition: all 0.5s ease;
  transform: translateX(100%);
}
.v-leave-to {
  // v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态
  transition: all 0.5s ease;
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-leave-active,
.v-enter-active {
  // v-enter-active：定义进入过渡生效时的状态
  // v-leave-active：定义离开过渡生效时的状态
  transition: all 0.5s ease;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  margin: 0;
}
#nav {
  padding: 30px;
  position: fixed;
  bottom:0;
  width:100%;
  margin:0 auto;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.router-link-active:nth-of-type(2) {
  color: blue !important;
}
.router-link-exact-active {
  color: blue !important;
}
a {
  color: black;
}
</style>
