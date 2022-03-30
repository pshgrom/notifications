import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Notifications from '../views/Notifications.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Notifications',
    component: Notifications
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
