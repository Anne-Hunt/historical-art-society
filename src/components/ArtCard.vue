<script setup>
// import { AppState } from '../AppState';
import { Art } from '../models/Art.js'
// import {computed} from 'vue'

// const artwork = computed(()=> AppState.arts)

defineProps({artwork: Art})
</script>


<template>
    <div>
        <RouterLink :to="{name: 'Art Details', params: {artId: artwork.id}}">
            <div class="shadow rounded">
                <img :src="artwork.small" class="img-contain" :="artwork.slug">
            </div>
        </RouterLink>
    </div>
</template>


<style lang="scss" scoped>

img{
    width:300px;
}

</style>