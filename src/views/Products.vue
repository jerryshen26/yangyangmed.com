<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.title = '產品介紹 - 電療機器與醫療耗材專業供應 | 陽陽儀器'
  
  let metaDesc = document.querySelector('meta[name="description"]')
  if (metaDesc) {
    metaDesc.content = '陽陽儀器產品包含復健治療中頻電療器、攜帶式低週波電療器、插式釦式電療貼片、迴路電擊板、電療導線等專業醫療耗材批發供應。'
  }
  
  let metaKeys = document.querySelector('meta[name="keywords"]')
  if (metaKeys) {
    metaKeys.content = '電療機器, 中頻電療器, 低週波電療器, 電療貼片, 電擊板, 醫療耗材批發, 電療導線'
  }
})
</script>
<template>
  <div class="products-page">
    <!-- 頁面標題 -->
    <div class="page-header">
      <h1>產品</h1>
      <p>專業電療設備與醫療耗材</p>
    </div>

    <!-- 電療設備區域 -->
    <section class="product-section">
      <h2 class="section-title">電療設備</h2>
      <p class="section-description">提供多種電刺激治療儀器，滿足不同復健與日常保健需求。</p>
      <div class="products-grid">
        <div class="product-card">
          <div class="product-image equipment">
            <div class="patch-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256">
                <path d="M144,80a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H152A8,8,0,0,1,144,80Zm40,32H152a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-32,48h32a8,8,0,0,0,0-16H152a8,8,0,0,0,0,16ZM104,80a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H96A8,8,0,0,1,104,80Zm-8,32H64a8,8,0,0,0,0,16H96a8,8,0,0,0,0-16Zm0,32H64a8,8,0,0,0,0,16H96a8,8,0,0,0,0-16ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM128,48V208h80V48Zm-16,0H48V208h64Z"/>
              </svg>
            </div>
          </div>
          <div class="product-info">
            <h3>電療機器</h3>
            <p>提供多種電刺激治療儀器，滿足不同復健與日常保健需求。適用於各種治療場景，幫助患者快速恢復健康。</p>
          </div>
        </div>

        <div class="product-card">
          <div class="product-image equipment medium-frequency">
            <div class="patch-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-88a8,8,0,0,1-8,8H136v24a8,8,0,0,1-16,0V136H96a8,8,0,0,1,0-16h24V96a8,8,0,0,1,16,0v24h24A8,8,0,0,1,168,128Z"/>
              </svg>
            </div>
          </div>
          <div class="product-info">
            <h3>復健中頻電療器（中頻機）</h3>
            <p>使用1,000～10,000Hz的中頻電流，能深入刺激深層肌肉與神經，增強肌肉收縮效果，有效促進血液循環，加速康復。適用於運動傷害或術後復健，可幫助患者快速恢復肌力。</p>
          </div>
        </div>

        <div class="product-card">
          <div class="product-image equipment low-frequency">
            <div class="patch-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80.06,80.06,0,0,0,128,208a80,80,0,0,0,0-160,79.6,79.6,0,0,0-54.91,22.17A8,8,0,0,1,62.1,58.2,95.38,95.38,0,0,1,128,32h1.29A96,96,0,0,1,224,128Z"/>
              </svg>
            </div>
          </div>
          <div class="product-info">
            <h3>低週波電療器</h3>
            <p>以0.1～1,000Hz的低頻電流作用於表層神經和肌肉，主要用於緩解肌肉酸痛、舒緩疼痛與放鬆緊繃。常見於物理治療及居家護理，幫助處理慢性或急性疼痛，並促進局部血液循環。</p>
          </div>
        </div>

        <div class="product-card">
          <div class="product-image equipment portable">
            <div class="patch-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256">
                <path d="M208,40H48A24,24,0,0,0,24,64V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v96H40V64A8,8,0,0,1,48,56ZM208,200H48a8,8,0,0,1-8-8V176H216v16A8,8,0,0,1,208,200ZM96,80a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,80Zm0,32a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,112Z"/>
              </svg>
            </div>
          </div>
          <div class="product-info">
            <h3>攜帶式小型低週波電療器</h3>
            <p>體積輕巧、方便攜帶，可隨時在家中、辦公室或外出旅行時使用。其低頻電刺激功能與一般電療器相同，能即時緩解肌肉疲勞與不適，操作簡便，適合一般消費者自行保健。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 醫療耗材區域 -->
    <section class="product-section">
      <h2 class="section-title">醫療耗材批發</h2>
      <p class="section-description">供應各式電療消耗品，品質穩定、兼容性高。</p>
      <div class="products-grid">
        <div class="product-card">
          <div class="product-image conductive-patch">
            <div class="patch-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256">
                <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,48H208V208H48Z"/>
              </svg>
            </div>
          </div>
          <div class="product-info">
            <h3>插式/釦式電療貼片</h3>
            <p>高品質自黏式電極貼片，適用於插針和扣式兩種接頭的電療儀。貼片黏性強、導電性佳，可反覆使用十數次，確保電流均勻傳導並提升治療效果。</p>
          </div>
        </div>

        <div class="product-card">
          <div class="product-image conductive-patch">
            <div class="patch-placeholder slimming">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"/>
              </svg>
            </div>
          </div>
          <div class="product-info">
            <h3>瘦身塑形專用貼片</h3>
            <p>針對腹部或大肌群設計的低頻刺激貼片，用於塑身和塑型目的。透過低頻脈衝刺激肌肉收縮，可訓練肌肉並防止萎縮，有助於運動後減少酸痛與痙攣。建議配合運動與飲食，一同達到塑形輔助效果。</p>
          </div>
        </div>

        <div class="product-card">
          <div class="product-image conductive-patch">
            <div class="patch-placeholder circuit">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM32,64H224V192H32Z"/>
              </svg>
            </div>
          </div>
          <div class="product-info">
            <h3>單極/雙極迴路電擊板</h3>
            <p>環狀電極貼片可同時作用於大面積肌群，提供單極與雙極兩種選擇。雙極貼片設計可均衡分布電流，提高治療效率；單極貼片則靈活度高，可針對局部療程使用，適合不同復健需求。</p>
          </div>
        </div>

        <div class="product-card">
          <div class="product-image accessories">
            <div class="patch-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256">
                <path d="M240,128a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H232A8,8,0,0,1,240,128Z"/>
              </svg>
            </div>
          </div>
          <div class="product-info">
            <h3>插式轉釦式轉接扣</h3>
            <p>多功能轉接頭可將插式（PIN）導線與扣式電極相互連接，方便不同介面儀器混搭使用。優質金屬接點確保連接穩固不鬆脫，增強產品兼容性。</p>
          </div>
        </div>

        <div class="product-card">
          <div class="product-image accessories">
            <div class="patch-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152Z"/>
              </svg>
            </div>
          </div>
          <div class="product-info">
            <h3>各式電療儀器導線</h3>
            <p>各款耐用導線適用於插式和扣式接頭，線材採矽膠外皮，具高彈性與良好絕緣。提供多通道接線，適合醫療院所和診所專業設備使用，確保信號穩定傳輸。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 聯絡資訊 -->
    <section class="contact-section">
      <div class="contact-info">
        <h2>需要更多資訊？</h2>
        <p>歡迎來電諮詢，我們將為您提供專業的產品建議</p>
        <div class="contact-details">
          <div class="contact-item">
            <img src="../assets/img/phone.svg" alt="電話" />
            <span>02-24571866</span>
          </div>
          <div class="contact-item">
            <img src="../assets/img/mobile.svg" alt="手機" />
            <span>0939-268778</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Products',
  // 產品頁面組件
}
</script>

<style scoped>
/* 頁面主容器 */
.products-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* 頁面標題 */
.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
}

.page-header p {
  font-size: 1.2rem;
  color: #4a5568;
}

/* 產品區域 */
.product-section {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid;
  border-image: linear-gradient(135deg, #FF7E3E 0%, #ffc857 50%, #22B573 100%) 1;
}

.section-description {
  font-size: 1.1rem;
  color: #4a5568;
  margin-bottom: 2rem;
  line-height: 1.6;
  text-align: center;
  font-weight: 500;
}

/* 產品網格 */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

/* 產品卡片 */
.product-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

/* 產品圖片 */
.product-image {
  height: 200px;
  overflow: hidden;
  position: relative;
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

/* 導電貼片佔位符 */
.conductive-patch {
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.conductive-patch.slimming {
  background: linear-gradient(135deg, #22B573 0%, #38a169 100%);
}

.conductive-patch.circuit {
  background: linear-gradient(135deg, #2b6cb0 0%, #3182ce 100%);
}

.accessories {
  background: linear-gradient(135deg, #FF7E3E 0%, #f56500 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 電療設備樣式 */
.equipment {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.equipment.medium-frequency {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.equipment.low-frequency {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.equipment.portable {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.patch-placeholder {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  text-align: center;
}

/* 產品資訊 */
.product-info {
  padding: 1.5rem;
}

.product-info h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.product-info p {
  color: #4a5568;
  line-height: 1.5;
  font-size: 0.9rem;
}

/* 聯絡資訊區域 */
.contact-section {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  margin-top: 4rem;
}

.contact-info h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 1rem;
}

.contact-info p {
  font-size: 1.1rem;
  color: #4a5568;
  margin-bottom: 2rem;
}

.contact-details {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.contact-item img {
  width: 20px;
  height: 20px;
}

.contact-item span {
  font-weight: 600;
  color: #1a202c;
  font-size: 1.1rem;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .products-page {
    padding: 1rem;
  }
  
  .products-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .contact-details {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .contact-section {
    padding: 2rem 1rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .product-info h3 {
    font-size: 1rem;
  }
  
  .product-info p {
    font-size: 0.85rem;
  }
  
  .contact-item {
    padding: 0.8rem 1.2rem;
  }
}
</style>