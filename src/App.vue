<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'

import NavHeader from './components/NavHeader.vue'

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
    <NavHeader/>
  </header>
  <div class="yang-body">
    <RouterView />
  </div>
</template>

<style>
.yang-body{
  position: relative;
  width: 100%;
  display: block;
  padding-top: 69px;
}

</style>

