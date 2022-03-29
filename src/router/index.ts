import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Notifications.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/friend-suggestion/:id',
    name: 'FriendSuggestion',
    component: () => import('../views/FriendSuggestion.vue')
  },
  {
    path: '/link-shared/:id',
    name: 'LinkShared',
    component: () => import('../views/LinkShared.vue')
  },
  {
    path: '/video-posted/:id',
    name: 'VideoPosted',
    component: () => import('../views/VideoPosted.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
