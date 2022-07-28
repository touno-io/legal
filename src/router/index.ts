import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/:catchAll(.*)",
    redirect: '/terms-use'
  },
  {
    path: '/terms-use',
    name: 'terms',
    component: () => import('../views/terms-conditions.vue')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/privacy-policy.vue')
  },
  {
    path: '/cookies',
    name: 'cookie',
    component: () => import('../views/cookie-policy.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
