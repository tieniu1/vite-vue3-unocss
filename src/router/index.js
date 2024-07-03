import { createRouter, createWebHashHistory } from 'vue-router'
import layoutVue from '@/views/qm-layout.vue'
import contactVue from '@/views/qm-contact.vue'
import notFoundVue from '@/views/qm-notFound.vue'
import GridLayout from '@/views/GridLayout.vue'
import grid from '@/views/grid/index.vue'
import grid1 from '@/views/grid/grid1.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layoutVue,
      children: [
        {
          path: '/contact',
          name: 'contact',
          component: contactVue
        }
      ]
    },

    {
      path: '/test',
      name: 'test',
      component: GridLayout
    },
    {
      path: '/grid',
      name: 'grid',
      component: grid,
      children: [
        {
          path: '1',
          name: 'grid1',
          component: grid1
        },
        {
          path: '2',
          name: 'grid2',
          component: () => import('@/views/grid/grid2.vue')
        },

        {
          path: '3',
          name: 'grid3',
          component: () => import('@/views/grid/grid3.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*/', // '["abc","sdfb","asdflj"]'
      name: 'notFound',
      component: notFoundVue
    }
  ]
})

export default router
