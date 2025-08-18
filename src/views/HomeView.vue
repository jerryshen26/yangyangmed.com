<script setup>
import CardFront from '../components/BusinessCardFront.vue'
import CardLater from '../components/BusinessCardLater.vue'
</script>

<template>
  <main>
    <div class="yang-home">
      <!-- <div class="yang-left">
        <img class="logo" src="../assets/img/yang_logo.svg" width="125" height="125" alt="陽陽儀器標誌">
        <h1><span class="yang-orange">陽陽</span><span class="yang-green">儀器</span></h1>
        <h3>
          全新網站建置中，敬請期待<br>
          如有需求請先來電詢問！
        </h3>      
      </div>
      <div class="yang-right">

      </div> -->
        <CardFront/>
        <CardLater/>      
    </div>
    
    <!-- 產品展示區域 -->
    <section class="product-showcase">
      <div class="container">
        <!-- Hero Banner -->
        <div class="hero-banner">
          <div class="hero-content">
            <h1 class="hero-title">專業電療設備<br>健康生活夥伴</h1>
            <p class="hero-description">
              陽陽儀器深耕醫療復健領域近30年，提供專業電療設備與醫療耗材。從運動傷害復健到日常保健，從專業治療到居家護理，我們的產品滿足各種使用情境需求。
            </p>
            <router-link to="/products" class="hero-button">
              <span>查看產品</span>
            </router-link>
          </div>
          <div class="hero-image">
            <img src="../assets/img/background/image4.jpg" alt="電療產品" />
          </div>
        </div>
        
        <!-- 精選產品 -->
        <div class="featured-products">
          <h2 class="section-title">精選產品</h2>
          <div class="products-grid">
            <div class="product-card">
              <div class="product-info">
                <h3>電療設備</h3>
                <p>疼痛緩解和減輕不適，強化肌力促進血液循環</p>
              </div>
            </div>
            
            <div class="product-card">
              <div class="product-info">
                <h3>電療貼片</h3>
                <p>高導電性、反覆使用不易脫落，適用多數電療機型</p>
              </div>
            </div>
            
            <div class="product-card">
              <div class="product-info">
                <h3>電療儀器插式/釦式導線</h3>
                <p>適用醫療及電療設備，信號穩定、不易斷裂</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 選擇我們的理由 -->
        <div class="why-choose-us">
          <div class="why-content">
            <h2 class="section-title">為什麼選擇陽陽儀器？</h2>
            <p class="section-description">
              我們的產品以您的健康為核心設計，提供有效且便利的疼痛管理和肌肉恢復解決方案。
            </p>
          </div>
          
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
              <div class="feature-content">
                <h3>多年經驗與口碑信賴</h3>
                <p>自成立以來，深耕醫療復健與美容器材領域邁向30年</p>
              </div>
            </div>

            <div class="feature-card">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
              <div class="feature-content">
                <h3>專業品質保證</h3>
                <p>擁有豐富的專業能力和嚴謹品管流程，產品品質穩定可靠</p>
              </div>
            </div>

            <div class="feature-card">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
              <div class="feature-content">
                <h3>完善售後服務</h3>
                <p>我們誠摯重視每位客戶，提供完整的技術諮詢與售後支援。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* 基本樣式 */
.yang-left {
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;  
}

.yang-left .logo {
  display: block;
  margin: 1em auto;
}

.yang-left h1 {
  color: black;
  display: inline-block;
  vertical-align: middle;
  font-size: 32px;
}

.yang-left h1 > .yang-orange {
  color: #FF7E3E;
}

.yang-left h1 > .yang-green {
  color: #22B573;
}

.yang-left h3 {
  margin: 1em auto;
}

/* 產品展示區域樣式 */
.product-showcase {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  padding: 4rem 0;
  margin-top: 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Banner */
.hero-banner {
  display: flex;
  align-items: center;
  gap: 3rem;
  background: white;
  border-radius: 20px;
  padding: 3rem;
  margin-bottom: 4rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.hero-content {
  flex: 1;
}

.hero-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.hero-button {
  background: #FF7E3E;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 126, 62, 0.3);
  text-decoration: none;
  display: inline-block;
}

.hero-button:hover {
  background: #22B573;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(34, 181, 115, 0.4);
}

.hero-image {
  flex: 1;
  max-width: 400px;
}

.hero-image img {
  width: 100%;
  height: auto;
  border-radius: 15px;
  object-fit: cover;
}

/* 精選產品區域 */
.featured-products {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a202c;
  text-align: center;
  margin-bottom: 3rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.product-card {
  background: linear-gradient(135deg, #FF7E3E 0%, #ffc857 50%, #22B573 100%);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  text-align: center;
  padding: 3rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.product-info {
  color: white;
}

.product-info h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
}

.product-info p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  font-size: 1.1rem;
}

/* 選擇我們的理由區域 */
.why-choose-us {
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.why-content {
  text-align: center;
  margin-bottom: 3rem;
}

.section-description {
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  text-align: center;
  padding: 2rem 1rem;
  border-radius: 15px;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #FF7E3E 0%, #ffc857 50%, #22B573 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem auto;
  color: white;
}

.feature-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 1rem;
}

.feature-content p {
  color: #4a5568;
  line-height: 1.5;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .hero-banner {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }
  
  .hero-image {
    max-width: 300px;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .products-grid {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .why-choose-us {
    padding: 2rem 1.5rem;
  }
}

@media (min-width: 1024px) {
  /* 桌面版本的額外優化 */
}
</style>
