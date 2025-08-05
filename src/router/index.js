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
      component: HomeView,
      meta: {
        title: '陽陽儀器 - 專業電療設備與醫療耗材批發 | 30年信賴品牌',
        description: '陽陽儀器提供專業電療機、中頻電療器、低週波電療器、電療貼片等醫療設備。深耕復健治療領域30年，為醫院診所及居家護理提供優質器材與服務。',
        keywords: '電療機, 電療貼片, 中頻電療器, 低週波電療器, 醫療器材, 復健治療, 陽陽儀器'
      }
    },
    {
      path: '/usage-scenarios',
      name: 'UsageScenarios',
      component: UsageScenarios,
      meta: {
        title: '使用場景 - 專業復健與居家護理解決方案 | 陽陽儀器',
        description: '陽陽儀器電療設備適用於醫院復健科、診所物理治療、居家護理、運動傷害復健等多種場景。專業電療機提供有效治療方案，滿足不同使用需求。',
        keywords: '復健治療, 居家護理, 運動傷害, 物理治療, 電療治療, 醫院復健科, 診所治療'
      }    
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
      meta: {
        title: '產品介紹 - 電療機器與醫療耗材專業供應 | 陽陽儀器',
        description: '陽陽儀器產品包含復健治療中頻電療器、攜帶式低週波電療器、插式釦式電療貼片、迴路電擊板、電療導線等專業醫療耗材批發供應。',
        keywords: '電療機器, 中頻電療器, 低週波電療器, 電療貼片, 電擊板, 醫療耗材批發, 電療導線'
      }       
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
      meta: {
        title: '關於我們 - 陽陽儀器有限公司 | 30年專業醫療器材經驗',
        description: '陽陽儀器成立30年來專注醫療復健與美容器材銷售，秉持「以客為尊、誠實正直」經營理念，提供專業品質保證、完善售後服務與客製化解決方案。',
        keywords: '陽陽儀器, 關於我們, 醫療器材公司, 電療設備供應商, 30年經驗, 品質保證'
      }       
    }

  ]
})

// 全域路由守衛 - 動態更新頁面標題和 meta
router.beforeEach((to) => {
  // 更新頁面標題
  if (to.meta.title) {
    document.title = to.meta.title
  }
  
  // 更新 meta description
  if (to.meta.description) {
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.content = to.meta.description
    } else {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      metaDescription.content = to.meta.description
      document.head.appendChild(metaDescription)
    }
  }
  
  // 更新 meta keywords
  if (to.meta.keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.content = to.meta.keywords
    } else {
      metaKeywords = document.createElement('meta')
      metaKeywords.name = 'keywords'
      metaKeywords.content = to.meta.keywords
      document.head.appendChild(metaKeywords)
    }
  }
})

export default router