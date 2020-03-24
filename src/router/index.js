import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/Home2',
    name: 'Home2',
    component: () => import('../views/Home2.vue'),
  },
  {
    name: 'About',
    path: '/about',
    component: () => import('../views/About.vue'),
    redirect: '/about/childOne',
    children: [
      {
        path: '/about/childOne', // 当 /about/childOne 匹配成功，childOne 会被渲染在 About 的 <router-view> 中
        component: () => import('../views/child/childOne.vue'),
      },
      {
        name:'childTwo',
        path: '/about/childTwo', // 当 /about/childOne 匹配成功，childOne 会被渲染在 About 的 <router-view> 中
        component: () => import('../views/child/childTwo.vue'),
      }
    ]
  },
  {
    name:'dancanshu',
    path: '/user/:id',
    component: () => import('../views/more.vue')
  }, 
  {
    name:'duocanshu',
    path: '/user/:username/even/:password',
    component: () => import('../views/msg.vue')
  } ,
  {
    name:'user', 
    path:'/user2',
    component: () => import('../views/user.vue')
  } ,
  {
    name:'user3', 
    path:'/user3',
    component: () => import('../views/user3.vue')
  } , 
  {
    name:'my', 
    path:'/my',
    component: () => import('../views/my.vue'),
    redirect: '/my/namedView',// 表示进入/my时重定向到/my/namedView，这样进入/my时第一个子组件就显示了
    children: [ 
      {
        name:'namedView', 
        path:'/my/namedView',
        components:{
          default:() => import('../views/comp/Foo.vue'),
          a:() => import('../views/comp/Bar.vue'),
          b:() => import('../views/comp/Baz.vue')
        }
      } ,
      {
        name:'namedView2', 
        path:'/my/namedView2',
        components:{
          default:() => import('../views/comp/Foo2.vue'),
          a:() => import('../views/comp/Bar2.vue'),
          b:() => import('../views/comp/Baz2.vue')
        }
      } 
    ]
  } ,
  {
    name:'nestNamedView', 
    path:'/nestNamedView',
    component: () => import('../views/nestNamedView.vue'),
    redirect: '/my/namedView3',
    children: [  // 子路由出口要写在当前路由/nestNamedView对应的页面nestNamedView.vue内，如果有多个子路由，在页面内可以使用导航式路由进行页面切换；
      {
        name:'namedView3', 
        path:'/my/namedView3',
        components:{
          default:() => import('../views/comp/Foo2.vue'),
          a:() => import('../views/comp/Bar2.vue'),
          b:() => import('../views/comp/Baz2.vue')
        }
      } 
    ]
  } ,
  {
    name:'alias', 
    path:'/alias',
    alias: '/b',
    component: () => import('../views/Home2.vue') 
  } ,
  {
    name:'notFonud', 
    path:'*',
    component: () => import('../views/404.vue')
  } 
]

const router = new VueRouter({
  routes
})

export default router