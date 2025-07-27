<template>
    <div class="yang-headerBlock">
      <div class="yang-header-logo">
        <router-link to="/">
          <img src="../assets/img/yang_logo.svg" alt="">
          <h3>
            <span class="yang-orange">陽陽</span>
            <!-- <span class="yang-orange">XX</span> -->
            <span class="yang-green">儀器</span>
          </h3>          
        </router-link>
      </div>
      
      <!-- 漢堡選單按鈕 -->
      <button class="mobile-menu-toggle" @click="toggleMobileMenu" :class="{ active: isMobileMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <!-- 導航選單 -->
      <div class="yang-nav" :class="{ 'mobile-open': isMobileMenuOpen }">
        <div class="yang-links">
          <ul>
            <li class="yang-tabs">
              <router-link to="/about" @click="closeMobileMenu">關於我們</router-link>
            </li>
            <li class="yang-tabs">
              <router-link to="/usage-scenarios" @click="closeMobileMenu">使用情境</router-link>
            </li>
            <li class="yang-tabs">
              <router-link to="/products" @click="closeMobileMenu">產品</router-link>
            </li>
          </ul>
        </div>
        <div class="yang-links contact-links">
          <ul>
            <li>
              <a href="mailto:syf@msn.con">
                <img src="../assets/img/mail_black.svg" alt="">                
              </a>
            </li>
            <li>
              <a href="tel:02-24571866">
                <img src="../assets/img/mobile_black.svg" alt="">                
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import { RouterLink } from 'vue-router'; // 導入 RouterLink
  import { ref } from 'vue';
  
  const isMobileMenuOpen = ref(false);
  
  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  };
  
  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false;
  };
  </script>
<style scoped>
.yang-headerBlock{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    margin: auto;
    padding: 1rem 0;
    position: relative;
}

.yang-header-logo {
    display: flex;
    align-items: center;
}

.yang-header-logo a {
    display: flex;
    align-items: center;
    text-decoration: none;
}

.yang-header-logo h3{
    margin-left: 10px;
    font-size: 22px;
    margin: 0 0 0 10px;
}

.yang-header-logo img{
    width: 48px;
    height: 48px;
}

.yang-header-logo h3>.yang-orange{
    color: #FF7E3E;
}
.yang-header-logo h3>.yang-green{
    color: #22B573;
}

/* 漢堡選單按鈕 */
.mobile-menu-toggle {
    display: none;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    z-index: 1001;
}

.mobile-menu-toggle span {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 3px 0;
    transition: 0.3s;
    border-radius: 2px;
}

.mobile-menu-toggle.active span:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
}

.mobile-menu-toggle.active span:nth-child(2) {
    opacity: 0;
}

.mobile-menu-toggle.active span:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
}

/* 導航區域 */
.yang-nav {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.yang-links{
    display: flex;
}

.yang-links ul{
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
}

.yang-links li a{
    padding: 10px;
    background: #fff;
    text-decoration: none;
    color: #333;
    transition: color 0.3s ease;
}

.yang-links li a:hover {
    color: #FF7E3E;
}

.yang-tabs{
    width: 120px;
    padding: 0px 20px;
}

.yang-links ul li img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
}

/* 響應式設計 */
@media (max-width: 768px) {
    .yang-headerBlock {
        width: 95%;
        padding: 1rem;
    }
    
    .mobile-menu-toggle {
        display: flex;
    }
    
    .yang-nav {
        position: fixed;
        top: 0;
        right: -100%;
        height: 100vh;
        width: 80%;
        max-width: 300px;
        background: white;
        box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
        transition: right 0.3s ease;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        padding-top: 80px;
        z-index: 1000;
    }
    
    .yang-nav.mobile-open {
        right: 0;
    }
    
    .yang-links {
        flex-direction: column;
        width: 100%;
    }
    
    .yang-links ul {
        flex-direction: column;
        width: 100%;
    }
    
    .yang-tabs {
        width: 100%;
        padding: 0;
        border-bottom: 1px solid #eee;
    }
    
    .yang-tabs a {
        display: block;
        padding: 1rem 2rem;
        font-size: 1.1rem;
        width: 100%;
        box-sizing: border-box;
    }
    
    .contact-links {
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 1px solid #eee;
    }
    
    .contact-links ul {
        flex-direction: row;
        justify-content: center;
        gap: 2rem;
    }
    
    .contact-links li {
        padding: 0;
    }
    
    .contact-links a {
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .yang-headerBlock {
        width: 100%;
        padding: 0.5rem 1rem;
    }
    
    .yang-header-logo h3 {
        font-size: 18px;
        margin-left: 8px;
    }
    
    .yang-header-logo img {
        width: 40px;
        height: 40px;
    }
    
    .yang-nav {
        width: 90%;
    }
}
</style>