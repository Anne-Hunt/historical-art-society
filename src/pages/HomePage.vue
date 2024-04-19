<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { AppState } from '../AppState.js';
import { artService } from '../services/ArtService.js';
import { loadState, saveState } from '../utils/Store.js';
import Login from '../components/Login.vue';
import Pop from '../utils/Pop.js';
import ArtCard from '../components/ArtCard.vue';
import { logger } from '../utils/Logger.js';
import { useRoute } from 'vue-router';

const theme = ref(loadState('theme') || 'light')
const artworks = computed(()=> AppState.artworks)
const currentPage = computed(()=> AppState.currentPage)
const totalPages = computed(()=> AppState.totalPages)
const route = useRoute()

onMounted(()=>{
 getArt()
  document.documentElement.setAttribute('data-bs-theme', theme.value)
})

function toggleTheme() {
  theme.value = theme.value == 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-bs-theme', theme.value)
  saveState('theme', theme.value)
}

async function getArt(){
  try {
    await artService.getArt()
    logger.log('sending get request')
  } catch (error) {
    Pop.toast('Unable to load our collection', 'error')
    logger.error(error)
  }
}

async function changePage(){
  try {
    const pageNum = route.query.page-0oiuhg  
    await artService.changePage(pageNum)
  } catch (error) {
    Pop.toast("Could not change page", 'error')
    logger.log(error)
  }
}

watch(route,
()=> {
  if (route.query.page){
    changePage()
  } else {
    getArt()
  }
}, 
{immediate: true})

</script>

<template>
  <div class="container-fluid">

    <section class="row">
      <div class="col-2 d-flex justify-content-center">
        <Login />
        <div class="align-self-end">
          <button class="btn text-dark" @click="toggleTheme"
          :title="`Enable ${theme == 'light' ? 'dark' : 'light'} theme.`">
          <i class="mdi" :class="theme == 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"></i>
        </button>
      </div>
    </div>
    <div class="class col-10 layout">
      <div>
        <RouterLink v-if="currentPage > 1" :to="{query: {currentPage: currentPage - 1}}">
          <button type="button" class="btn btn-dark"><i class="mdi mdi-left-arrow"></i>Back</button>
        </RouterLink>
        <span>Page {{ currentPage }}</span>
        <RouterLink v-if="currentPage < totalPages" :to="{query: {currentPage: currentPage + 1}}">
          <button type="button" class="btn btn-dark"><i class="mdi mdi-right-arrow"></i>Forward</button>
        </RouterLink>
      </div>
      
      <div v-for="artwork in artworks" :key="artwork.id" class="row">
        
        <ArtCard :artwork="artwork" />
      </div>
      <!-- <img :src="artwork.small" class="rounded shadow img-fluid" :alt="artwork.slug"> -->
      
    </div>
  </section>
</div>
</template>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
}



</style>
