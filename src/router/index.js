import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
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
  } 
]

const router = new VueRouter({
  routes
})

export default router