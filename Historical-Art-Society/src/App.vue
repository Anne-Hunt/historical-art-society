<script setup>
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import { artService } from './services/ArtService.js';
import Pop from './utils/Pop.js';

async function getArt(){
  try {
    await artService.getArt()
  } catch (error) {
    Pop.toast('Unable to load our collection', 'error')
    console.error(error)
  }
}
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="bg-dark text-light">
    Made with 💖 by CodeWorks
  </footer>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
