import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
       console.log('beforeEnter',to)
       console.log('beforeEnter',from)
       next()
    }
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
    path: '/user/:id',//单参数路由匹配
    component: () => import('../views/more.vue')
  }, 
  {
    name:'duocanshu',
    path: '/user/:username/even/:password',// 多参数路由匹配
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
        path:'/my/namedView233333',
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
    alias: '/b', // 该属性配置路由的别名，访问别名和访问path、name一样 
    component: () => import('../views/Home2.vue') 
  } ,
  {
    name:'props', 
    path:'/props/:id',
    props:true,//使用props实现组件和路由解耦（布尔模式）
    component: () => import('../views/Home2.vue') 
  } ,
  {
    name:'props', 
    path:'/props2',
    props: { newsletterPopup: false },//使用props实现组件和路由解耦（对象模式）
    component: () => import('../views/Home2.vue') 
  } ,
  {
    name:'props', 
    path:'/props3',
    props: (route)=>({query:route.query.q}),//使用props实现组件和路由解耦（函数模式）
    component: () => import('../views/Home2.vue') 
  } ,
  {
    name:'notFonud', 
    path:'*',
    component: () => import('../views/404.vue')  // 使用路由懒加载模式
  } 
]

const router = new VueRouter({
  mode: 'hash',// 路由模式，默认是hash模式，还有一种 history 模式
  routes:routes,
  // 配置页面的滚动行为
  scrollBehavior (to, from, savedPosition) {
    // savedPosition 只对浏览器的前进后退按钮有效
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
// 全局前置守卫:当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 等待中。
// to: 即将进入的目标路由对象
// from：当前导航正要离开的路由对象；
// next :Function ，需要调用该方法来resolve这个钩子函数；执行效果依赖于next方法中的参数；
//   next中参数的说明：
router.beforeEach((to,from,next)=>{
  console.log('beforeEach',to)
  console.log('beforeEach',from)
  next()
})
// 全局解析守卫:在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用
router.beforeResolve((to,from,next)=>{
  console.log('beforeResolve',to)
  console.log('beforeResolve',from)
  next()
})
// 全局后置钩子
router.afterEach((to,from)=>{
  console.log('afterEach',to)
  console.log('afterEach',from)
})
export default router