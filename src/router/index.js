import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import AboutMeView from '../views/AboutMeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'home'
      },
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      meta: {
        title: 'projects'
      },
      component: ProjectsView
    },
    {
      path: '/about-me',
      name: 'about me',
      meta: {
        title: 'about-me'
      },
      component: AboutMeView
    },

  ]
})

router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title = toRoute.meta && toRoute.meta.title ? '~/portfolio/' + toRoute.meta.title : '';

  next();
})

export default router
