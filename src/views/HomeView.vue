
<script setup>
import CardFront from '../components/BusinessCardFront.vue'
import CardLater from '../components/BusinessCardLater.vue'
</script>

<template>
  <main>
    <div class="yang-home">
      <CardFront/>
      <CardLater/>      
    </div>
  </main>  
</template>


<style scoped>



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

.yang-left h1{
    color: black;
    display: inline-block;
    vertical-align: middle;
    font-size: 32px;
}

.yang-left h1>.yang-orange{
    color: #FF7E3E;
}
.yang-left h1>.yang-green{
    color: #22B573;
}

.yang-left h3{
  margin: 1em auto;
}

.yang-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (min-width: 1024px) {
  .yang-right {
    align-items: flex-start;
  }
}

</style>