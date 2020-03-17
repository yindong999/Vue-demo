<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/user/more">more1</router-link> | 
      <router-link to="/user/more2">more2</router-link> | 
      <router-link to="/user/zhagnsan/even/123">张三</router-link> | 
      <router-link to="/user/lisi/even/456">李四</router-link> | 
    </div>
     <transition> 
         <router-view/>
     </transition>
  </div>
</template>

<style lang="scss">
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;margin:0;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
