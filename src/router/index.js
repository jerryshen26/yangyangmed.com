import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'
import UsageScenarios from '../views/UsageScenarios.vue';
import Products from '../views/Products.vue';
import AboutView from '../views/AboutView.vue';

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
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    }

  ]
})

export default router