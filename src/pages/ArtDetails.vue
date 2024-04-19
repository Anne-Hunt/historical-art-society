<script setup>
import {AppState} from '../AppState.js';
import { onMounted} from 'vue'
import {useRoute} from 'vue-router'
import { artService } from '../services/ArtService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

const currentArt = AppState.activeArt

const route = useRoute()

// const artworks = computed(()=>AppState.artworks)

function setActiveArt(){
  const active = AppState.artworks.find(artwork => artwork.id == route.params.artworkId)
  AppState.activeArt = active
}

async function getActiveArt(){
  try {
    await artService.getActiveArt(route.params.artworkId)
  } catch (error) {
    Pop.toast('Unable to render that works,', 'error')
    logger.log(error);
  }
}

onMounted(()=>{
  setActiveArt()
  getActiveArt()
})

// onUnmounted(()=>{
// })
</script>


<template>
  <div class="component" v-if="currentArt">
    {{ route.params.artId }} 

    <img class="img-fluid" :src="currentArt.full" alt="">
    <p class="text-center">{{ currentArt.attribution }}</p>
    <p>{{ currentArt.description }}</p>
</div>
<div>
    <i class="mdi mdi-paintbrush fs-1"></i>
</div>
</template>


<style lang="scss" scoped>

</style>