import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'is-active-link',
  routes: [
    {
      path: '/',
      component: () => import('../views/layout/HeaderView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
          meta: {
            title: '白頭翁的特性'
          }
        },
        {
          path: 'story',
          name: 'Story',
          component: () => import('../views/HomeView.vue'),
          meta: {
            title: '白頭翁的故事'
          }
        },
        {
          path: 'photo',
          name: 'photo',
          component: () => import('../views/HomeView.vue'),
          meta: {
            title: '白頭翁的美照'
          }
        },
        {
          path: 'crisis',
          name: 'crisis',
          component: () => import('../views/HomeView.vue'),
          meta: {
            title: '白頭翁的危機'
          }
        }
      ]
    }
  ]
})

const DEFAULT_TITLE = '白頭翁不吃小米'
router.afterEach((to, from) => {
  nextTick(() => {
    if (to.meta.title) {
      document.title = `${to.meta.title} | ${DEFAULT_TITLE}`
    } else {
      document.title = DEFAULT_TITLE
    }
  })
})
export default router
