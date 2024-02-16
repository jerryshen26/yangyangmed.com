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
      <div class="yang-links">
        <ul>
          <li class="yang-tabs">
            <!-- <router-link to="/usage-scenarios">使用情境</router-link> -->
          </li>
        </ul>
      </div>
      <div class="yang-links">
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
  </template>
  <script setup>
  import { RouterLink } from 'vue-router'; // 導入 RouterLink
  </script>
<style scoped>
.yang-headerBlock{
    display: flex;
    align-items: center;
    width: 70%;
    margin: auto;
}

.yang-header-logo h3{
    margin-left: 10px;
    font-size: 22px;
    display: inline-block;
    vertical-align: middle;
}

.yang-links{
    vertical-align: middle;
    display: flex;
}


.yang-links ul{
    display: flex;
    padding: 0;
}
.yang-links li a{
    padding: 10px;
    background: #fff;
}

.yang-tabs{
    width: 120px;
    padding: 0px 20px;
}

.yang-header-logo img{
    width: 48px;
    height: 48px;
    display: inline-block; 
    vertical-align: middle;   
}
.yang-header-logo h3>.yang-orange{
    color: #FF7E3E;
}
.yang-header-logo h3>.yang-green{
    color: #22B573;
}

    .yang-header-logo{
        width: 100%;
        margin: auto;
    }
    .yang-header-logo img{

    }

    .yang-links ul li img{
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }
</style>