import { createRouter, createWebHistory } from 'vue-router'
import Layout from "@/views/Layout.vue";
import Deploy from "@/views/Deploy.vue";
import Monitor from "@/views/Monitor.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/deploy',
      children: [
        {
          path: '/deploy',
          component: Deploy,
        },
        {
          path: '/monitor',
          component: Monitor,
        },
      ],
    }
  ]
})

export default router
