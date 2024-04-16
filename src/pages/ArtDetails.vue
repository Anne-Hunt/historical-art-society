<script setup>
import {AppState} from '../AppState.js';
import {computed} from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute()

const artwork = computed(()=>AppState.arts)
</script>


<template>
<section class="row">
    {{ artwork.full }}
    {{ artwork.attribution }}
    {{ artwork.description }}
</section>
</template>


<style lang="scss" scoped>

</style>