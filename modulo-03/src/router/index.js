import { createRouter, createWebHistory } from 'vue-router'
import AP01 from '@/views/AP01.vue'
import AP02 from '@/views/AP02.vue'
import v1 from '@/components/v1.vue'
import v2 from '@/components/v2.vue'
import v3 from '@/components/v3.vue'
import v4 from '@/components/v4.vue'

const routes = [
  {
    path: '/',
    redirect  : '/AP01/v1'
  },
  {
    path: '/AP01',
    component: AP01,
    children: [
      {
        path: 'v1',
        component: v1,
        name: 'AP01V1'
      },
      {
        path: 'v2',
        component: v2,
        name: 'AP01V2'
      },
      {
        path: 'v3',
        component: v3,
        name: 'AP01V3'
      },
      {
        path: 'v4',
        component: v4,
        name: 'AP01V4'
      },
    ],
  }, 
  {
    path: '/AP02',
    component: AP02,
    children: [
      { path: 'v1', component: v1, name: 'AP02V1' },
      { path: 'v2', component: v2, name: 'AP02V2' },
      { path: 'v3', component: v3, name: 'AP02V3' },
      { path: 'v4', component: v4, name: 'AP02V4' },   
    ],
  },
  {
    path: '/:catchAll(.*)', // catch-all for undefined routes
    redirect: '/AP02/v1'
  }
]   
const router = createRouter({
  history: createWebHistory(),
  routes,
})  

export default router
