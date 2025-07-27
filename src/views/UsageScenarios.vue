<template>
  <div class="usage-scenarios-container">
    <!-- 頁面標題 -->
    <div class="page-title">
      <h1>使用情境</h1>
      <p>探索陽陽儀器產品的多元應用場景</p>
    </div>

    <!-- 運動傷害後復健 -->
    <div class="yang-background-block">
      <div class="yang-background-bg-area yang-background-bg-area1"></div>
      <div class="yang-background-txt-area">
        <div class="yang-text-box">
          <h3>運動傷害後復健</h3>
          <p>運動中或運動後造成的拉傷、扭傷、肌肉痠痛的專業治療</p>
          <div class="yang-description-area">
              <h5>治療原理</h5>
              <p>運動中或運動後造成的拉傷、扭傷、肌肉痠痛，可使用電療儀加速疼痛緩解與肌肉放鬆。中頻電療能刺激中大型神經纖維，促進血液循環並減輕痠痛。</p>
              <div class="product-list">
                <strong>適用產品：</strong>中頻電療器、低週波電療器、攜帶式電療器、各類貼片與導線
              </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 慢性關節與腰背疼痛 -->
    <div class="yang-background-block">
      <div class="yang-background-txt-area">
        <div class="yang-text-box">
          <h3>慢性關節與腰背疼痛</h3>
          <p>長期關節炎、下背或肩頸腰部疲勞疼痛的管理</p>
          <div class="yang-description-area">
              <h5>治療原理</h5>
              <p>長期關節炎、下背或肩頸腰部疲勞疼痛等慢性症狀，可利用電療儀進行疼痛管理。低週波電療透過門檻效應阻斷痛覺傳遞，並促進組織循環與放鬆肌肉有效緩解慢性疼痛。</p>
              <div class="product-list">
                <strong>適用產品：</strong>低週波電療器、中頻電療器、攜帶式電療器、貼片與導線
              </div>
          </div>
        </div>
      </div>
      <div class="yang-background-bg-area yang-background-bg-area3"></div>
    </div>

    <!-- 辦公室肩頸酸痛 -->
    <div class="yang-background-block">
      <div class="yang-background-bg-area yang-background-bg-area4"></div>
      <div class="yang-background-txt-area">
        <div class="yang-text-box">
          <h3>辦公室肩頸酸痛</h3>
          <p>長時間久坐或姿勢不良造成的肩頸僵硬緩解</p>
          <div class="yang-description-area">
            <h5>治療原理</h5>
            <p>長時間久坐或姿勢不良造成的肩頸僵硬，可以在肩頸部位貼附電極片，使用低頻電療儀刺激肩頸肌肉，快速緩解緊繃和痠痛。此方式便於一般上班族在辦公室中短暫自我放鬆。</p>
            <div class="product-list">
              <strong>適用產品：</strong>低週波電療器、便攜式電療器、貼片與導線
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 健身增肌塑形 -->
    <div class="yang-background-block">
      <div class="yang-background-txt-area">
        <div class="yang-text-box">
          <h3>健身增肌塑形</h3>
          <p>在健身訓練中配合使用，強化深層肌肉群收縮</p>
          <div class="yang-description-area">
              <h5>治療原理</h5>
              <p>在健身訓練中配合使用電療儀，可強化深層肌肉群的收縮。定期搭配力量訓練使用EMS模式，有助提升肌力和訓練效果，加速身體線條雕塑。</p>
              <div class="product-list">
                <strong>適用產品：</strong>肌肉電刺激儀、中頻電療器、各式貼片與導線
              </div>
          </div>
        </div>
      </div>
      <div class="yang-background-bg-area yang-background-bg-area5"></div>
    </div>

    <!-- 長者肌力維持 -->
    <div class="yang-background-block">
      <div class="yang-background-bg-area yang-background-bg-area6"></div>
      <div class="yang-background-txt-area">
        <div class="yang-text-box">
          <h3>長者肌力維持</h3>
          <p>針對行動較不便或肌力減退者的被動運動輔助</p>
          <div class="yang-description-area">
            <h5>治療原理</h5>
            <p>對於行動較不便或肌力減退者，電療可以作為被動運動的輔助。透過電流刺激肌肉收縮，有助維持和恢復肌肉力量，預防肌肉萎縮。</p>
            <div class="product-list">
              <strong>適用產品：</strong>中頻電療器、EMS肌肉電刺激儀、貼片與導線
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'usageScenarios',
  // Add your component logic here
}
</script>

<style scoped>
/* 主要區塊樣式 */
.yang-background-block {
  display: flex;
  min-height: 60vh;
  margin-bottom: 2rem;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease;
}

.yang-background-block:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.18);
}

/* 背景圖片區域 */
.yang-background-bg-area {
  width: 60%;
  background: #a0a0a0;
  background-size: cover;
  background-position: center center;
  position: relative;
}

.yang-background-bg-area::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 126, 62, 0.15) 0%, rgba(34, 181, 115, 0.15) 100%);
}

.yang-background-bg-area1 {
  background-image: url(../../src/assets/img/background/image1.jpg);
}

.yang-background-bg-area3 {
  background-image: url(../../src/assets/img/background/image2.jpg);
}

.yang-background-bg-area4 {
  background-image: url(../../src/assets/img/background/image3.jpg);
}

.yang-background-bg-area5 {
  background-image: url(../../src/assets/img/background/image4.jpg);
}

.yang-background-bg-area6 {
  background-image: url(../../src/assets/img/background/image5.jpg);
}

/* 文字區域 */
.yang-background-txt-area {
  width: 40%;
  padding: 3rem 2.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  display: flex;
  align-items: center;
}

.yang-text-box {
  width: 100%;
}

/* 標題樣式 */
.yang-text-box h3 {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  background: linear-gradient(135deg, #FF7E3E 0%, #ffc857 50%, #22B573 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 描述文字 */
.yang-text-box > p {
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-weight: 400;
}

/* 產品描述區域 */
.yang-description-area {
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
  padding: 2rem;
  border-radius: 15px;
  border-left: 4px solid;
  border-image: linear-gradient(135deg, #FF7E3E 0%, #ffc857 50%, #22B573 100%) 1;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.yang-description-area h5 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
}

.yang-description-area h5::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 30px;
  height: 3px;
  background: linear-gradient(135deg, #FF7E3E 0%, #ffc857 50%, #22B573 100%);
  border-radius: 2px;
}

.yang-description-area p {
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.8;
  margin: 0 0 1.5rem 0;
  font-weight: 400;
}

.product-list {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  border-left: 3px solid;
  border-image: linear-gradient(135deg, #FF7E3E 0%, #ffc857 50%, #22B573 100%) 1;
}

.product-list strong {
  color: #2d3748;
  font-weight: 600;
  display: block;
  margin-bottom: 0.5rem;
}

/* 響應式設計 */
@media (max-width: 1024px) {
  .yang-background-block {
    flex-direction: column;
    min-height: auto;
  }
  
  .yang-background-bg-area,
  .yang-background-txt-area {
    width: 100%;
  }
  
  .yang-background-bg-area {
    height: 300px;
    order: 1;
  }
  
  .yang-background-txt-area {
    order: 2;
    padding: 2.5rem 2rem;
  }
  
  /* 偶數區塊在平板上調整順序（第2、4、6個區塊） */
  .yang-background-block:nth-child(even) .yang-background-bg-area {
    order: 2;
  }
  
  .yang-background-block:nth-child(even) .yang-background-txt-area {
    order: 1;
  }
}

@media (max-width: 768px) {
  .yang-background-txt-area {
    padding: 2rem 1.5rem;
  }
  
  .yang-text-box h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  
  .yang-text-box > p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .yang-description-area {
    padding: 1.5rem;
  }
  
  .yang-description-area h5 {
    font-size: 1.1rem;
  }
  
  .yang-description-area p {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .yang-background-block {
    margin-bottom: 1.5rem;
    border-radius: 15px;
  }
  
  .yang-background-bg-area {
    height: 250px;
  }
  
  .yang-background-txt-area {
    padding: 1.5rem 1rem;
  }
  
  .yang-text-box h3 {
    font-size: 1.5rem;
  }
  
  .yang-description-area {
    padding: 1.2rem;
  }
}

/* 整體頁面容器 */
.usage-scenarios-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

/* 頁面標題 */
.page-title {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title h1 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #FF7E3E 0%, #ffc857 50%, #22B573 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-title p {
  font-size: 1.2rem;
  color: #4a5568;
  font-weight: 400;
}
</style>