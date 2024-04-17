<script setup>
import { AppState } from '../AppState';
import { Art } from '../models/Art.js'
import {computed} from 'vue'

const artwork = computed(()=> AppState.arts)

defineProps({art: Art})
</script>


<template>
    <RouterLink :to="{name: 'Art Details', params: {artId: art.id}}">
    <div class="shadow rounded">
            <img :src="art.small" class="img-cover" :="art.slug">
    </div>
    </RouterLink>
</template>


<style lang="scss" scoped>
.component{
color: inherit;
}
img{
    width:300px;
    object-fit: cover;
    object-position: center;
}

</style>