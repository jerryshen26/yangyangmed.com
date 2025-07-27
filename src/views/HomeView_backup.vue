
<script setup>
import CardFront from '../components/BusinessCardFront.vue'
import CardLater from '../components/BusinessCardLater.vue'
</script>

<template>
  <main>
    <div class="yang-home">
      <div class="yang-left">
        <img class="logo" src="../assets/img/yang_logo.svg" width="125" height="125" alt="">
        <h1><span class="yang-orange">陽陽</span><span class="yang-green">儀器</span></h1>
        <!-- <h1><span class="yang-orange">XX</span><span class="yang-green">儀器</span></h1> -->
        <h3>
          全新網站建置中，敬請期待<br>
          如有需求請先來電詢問！
        </h3>      
      </div>
      <div class="yang-right">
        <CardFront/>
        <CardLater/>
      </div>
    </div>
    <!-- 產品展示區域 -->
    <section class="product-showcase">
      <div class="container">
        <!-- Hero Banner -->
        <div class="hero-banner">
          <div class="hero-content">
            <h1 class="hero-title">自然療癒，重拾活力</h1>
            <p class="hero-description">
              探索電療的力量，緩解疼痛並促進肌肉恢復。我們的創新設備和貼片提供無藥物解決方案，幫助您過上最好的生活。
            </p>
            <button class="hero-button">
              <span>了解更多</span>
            </button>
          </div>
          <div class="hero-image">
            <img src="../assets/img/background/painRelief.jpg" alt="電療產品" />
          </div>
        </div>
        
        <!-- 精選產品 -->
        <div class="featured-products">
          <h2 class="section-title">精選產品</h2>
          <div class="products-grid">
            <div class="product-card">
              <div class="product-image">
                <img src="../assets/img/background/recoverytreatment.jpg" alt="電療設備" />
              </div>
              <div class="product-info">
                <h3>電療設備</h3>
                <p>先進的疼痛緩解和肌肉恢復技術</p>
              </div>
            </div>
            
            <div class="product-card">
              <div class="product-image">
                <img src="../assets/img/background/painRelief.jpg" alt="電療貼片" />
              </div>
              <div class="product-info">
                <h3>電療貼片</h3>
                <p>針對特定區域的精準疼痛緩解</p>
              </div>
            </div>
            
            <div class="product-card">
              <div class="product-image">
                <img src="../assets/img/background/Slimming.jpg" alt="便攜式電療設備" />
              </div>
              <div class="product-info">
                <h3>便攜式設備</h3>
                <p>緊湊便攜，隨時隨地使用</p>
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
                <h3>無藥物疼痛緩解</h3>
                <p>我們的電療設備和貼片提供天然的疼痛藥物替代方案，無副作用。</p>
              </div>
            </div>

            <div class="feature-card">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
              <div class="feature-content">
                <h3>臨床驗證技術</h3>
                <p>基於科學研究，我們的產品為疼痛緩解和肌肉恢復提供有效結果。</p>
              </div>
            </div>

            <div class="feature-card">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
              <div class="feature-content">
                <h3>易於使用且便攜</h3>
                <p>為便利而設計，我們的產品使用簡單，可隨身攜帶提供即時緩解。</p>
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
  background: linear-gradient(135deg, #FF7E3E 0%, #22B573 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 126, 62, 0.3);
}

.hero-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 126, 62, 0.4);
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
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.product-image {
  height: 200px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.product-info {
  padding: 1.5rem;
}

.product-info h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 0.5rem;
}

.product-info p {
  color: #4a5568;
  line-height: 1.5;
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
  background: linear-gradient(135deg, #FF7E3E 0%, #22B573 100%);
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