<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import CardFront from './components/BusinessCardFront.vue'
import CardLater from './components/BusinessCardLater.vue'
</script>

<!-- <template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template> -->


<template>
  <header>
    <img class="logo" src="./assets/img/yang_logo.svg" width="125" height="125" alt="">
    <h1><span class="yang-orange">陽陽</span><span class="yang-green">儀器</span></h1>
    <h3>
      全新網站建置中，敬請期待<br>
      如有需求請先來電詢問！
    </h3>
  </header>
  <main>
    <CardFront/>
    <CardLater/>
  </main>  
</template>

<style scoped>

header {
  line-height: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;  
}

.logo {
  display: block;
  margin: 1em auto;
}

header h1{
    color: black;
    display: inline-block;
    vertical-align: middle;
    font-size: 32px;
}

header h1>.yang-orange{
    color: #FF7E3E;
}
header h1>.yang-green{
    color: #22B573;
}

header h3{
  margin: 1em auto;
}

@media (min-width: 1024px) {

}

</style>
