import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutPage.vue'),
    },
    {
      path: '/learn',
      name: 'learn',
      component: () => import('../pages/LearnPage.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: () => import('../pages/404.vue'),
    }
  ],
})

export default router
