import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/label',
    name: 'label',
    component: () => import('@/views/Label.vue')
  },
  {
    path: '/money',
    name: 'money',
    component: () => import('@/views/Money.vue')
  },
  {
    path: '/statistic',
    name: 'statistic',
    component: () => import('@/views/Statistic.vue')
  },
  {
    path: '*',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
