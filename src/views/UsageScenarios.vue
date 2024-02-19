<template>
  <div class="yang-background-block">
    <div class="yang-background-bg-area"></div>
    <div class="yang-background-txt-area">
      <div class="yang-text-box">
        <h3>減肥塑身</h3>
        <p>一種有效的方式來減肥塑身，改善身體狀況和外觀</p>
        <div class="yang-description-area">
            <h5>試用產品</h5>
            <p>瘦身貼片：結合了科學的配方和先進的技術，幫助您減少脂肪累積並塑造理想的身材。輕鬆貼上，享受瘦身美體的過程！</p>
        </div>
      </div>
    </div>
  </div>
  <div class="yang-background-block">
    <div class="yang-background-txt-area">
      <div class="yang-text-box">
        <h3>康復治療</h3>
        <p>能進行康復治療，希望找到可靠且有效的治療設備，以加速康復過程</p>
        <div class="yang-description-area">
          <h5>試用產品</h5>
            <p>電療機、中頻機、低週波：我們的電療機、中頻機和低週波設備是專業的復健儀器，適用於不同的治療需求。無論是恢復運動損傷還是緩解疼痛，我們都有合適的產品來滿足您的需求</p>
        </div>
      </div>
    </div>
    <div class="yang-background-bg-area"  style="background: #ff9a9a;"></div>
  </div>
  <div class="yang-background-block">
    <div class="yang-background-bg-area"  style="background: #4bffdb;"></div>
    <div class="yang-background-txt-area">
      <div class="yang-text-box">
        <h3>疼痛緩解</h3>
        <p>一種有效的方法來緩解身體疼痛，以提高生活質量並恢復活動能力</p>
        <div class="yang-description-area">
            <h5>試用產品</h5>
            <p>瘦艾諾美自黏性電極片：我們的自黏性電極片採用最先進的技術，提供優異的黏附性和舒適性，讓您在治療過程中感受到最佳的效果</p>
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
.yang-background-block{
  display: flex;
  height: 50vh;
}
.yang-background-bg-area{
  width: 60%;
  background: #a0a0a0;
}
.yang-background-txt-area{
  width: 40%;
  padding: 2em;
}
.yang-text-box{

}

.yang-description-area h5{
  font-size: 16px;
    font-weight: bold;
}
</style>