import { createRouter, createWebHistory } from 'vue-router'
import Layout from "@/views/Layout.vue";
import Deploy from "@/views/Deploy.vue";

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
      ],
    }
  ]
})

export default router
