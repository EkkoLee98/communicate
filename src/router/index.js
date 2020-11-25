import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/pe',
    name: 'pe',
    component: () => import(/* webpackChunkName: "about" */ '../views/PropsEmit.vue')
  },
  {
    path: '/cm',
    name: 'cm',
    component: () => import(/* webpackChunkName: "about" */ '../views/CumModel.vue')
  },
  {
    path: '/cs',
    name: 'cs',
    component: () => import(/* webpackChunkName: "about" */ '../views/CumSync.vue')
  },
  {
    path: '/pr',
    name: 'pr',
    component: () => import(/* webpackChunkName: "about" */ '../views/ParentChildren.vue')
  },
  {
    path: '/al',
    name: 'al',
    component: () => import(/* webpackChunkName: "about" */ '../views/AttrsListener.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
