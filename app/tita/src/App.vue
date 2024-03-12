<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted } from 'vue';
import { GameInit } from './logics/game/init';


onMounted(() => {
  console.log(`the component is now mounted.`)
  GameInit()
})


</script>

<template>
  <div class="container">
    <h1>Welcome to Tita!</h1>
    

  </div>
</template>

<style scoped>

</style>
