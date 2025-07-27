import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'
import UsageScenarios from '../views/UsageScenarios.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/usage-scenarios',
      name: 'UsageScenarios',
      component: UsageScenarios
    }
  ]
})

export default router