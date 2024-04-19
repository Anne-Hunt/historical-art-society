<script setup>
// import { AppState } from './AppState'
// import Navbar from './components/Navbar.vue'


</script>

<template>
  <header>
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    Made by Anne Hunt
  </footer>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}
*{
  background-color: antiquewhite;

}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
