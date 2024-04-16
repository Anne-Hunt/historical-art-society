<script setup>
import { computed, onMounted, ref } from 'vue';
import { AppState } from '../AppState.js';
import { artService } from '../services/ArtService.js';
import { loadState, saveState } from '../utils/Store.js';
import Login from '../components/Login.vue';
import Pop from '../utils/Pop.js';
import ArtCard from '../components/ArtCard.vue';

const theme = ref(loadState('theme') || 'light')

onMounted(() => {
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
  } catch (error) {
    Pop.toast('Unable to load our collection', 'error')
    // eslint-disable-next-line no-console
    console.error(error)
  }
}

const artworks = computed(()=> AppState.arts)

onMounted(()=>{
 getArt()
})
</script>

<template>
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
    <div class="class col-10">
      <div class="row">
      <div v-for="artwork in artworks" :key="artwork.id" class="col-3">
            <img :src="artwork.small" class="img-fluid" :alt="artwork.slug">
            <p>{{ artwork.attribution }}</p>
          </div>
    </div>
      <!-- <ArtCard v-for="art in artworks" :key="art.id" :art="art" /> -->
      <!-- {{ artworks }} -->
    </div>
  </section>
</template>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}

</style>
