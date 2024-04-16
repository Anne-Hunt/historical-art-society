<script setup>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { artService } from '../services/ArtService.js';
import Pop from '../utils/Pop.js';

async function getArt(){
  try {
    await artService.getArt()
  } catch (error) {
    Pop.toast('Unable to load our collection', 'error')
    console.error(error)
  }
}

const arts = computed(()=> AppState.arts)
onMounted(this.getArt)
</script>

<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="home-card p-5 card align-items-center shadow rounded elevation-3">
      <img src="https://bcw.blob.core.windows.net/public/img/8600856373152463" alt="CodeWorks Logo"
        class="rounded-circle">
      <h1 class="my-5 bg-dark text-white p-3 rounded text-center">
        Vue 3 Starter
      </h1>
    </div>
  </div>
</template>

<style scoped lang="scss">


</style>
