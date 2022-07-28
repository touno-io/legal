import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/:catchAll(.*)",
    redirect: { name: 'terms' }
  },
  {
    path: '/terms-use',
    name: 'terms',
    component: () => import('../views/terms-conditions.vue'),
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
  routes,
  linkActiveClass: "active", // active class for non-exact links.
  linkExactActiveClass: "exact-active" // active class for *exact* links.
})

export default router
