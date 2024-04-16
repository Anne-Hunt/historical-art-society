<script setup>
import { AppState } from '../AppState';
import { Art } from '../models/Art.js'
import {computed} from 'vue'

const artwork = computed(()=> AppState.arts)

defineProps({art: Art})
</script>


<template>
    <RouterLink :to="{name: 'Art Details', params: {artId: art.id}}">
    <div class="component col-3">
        <div class="card-image-top">
            <img :src="art.small" class="img-cover" :="art.slug">
        </div>
    </div>
    </RouterLink>
</template>


<style lang="scss" scoped>
.component{
color: inherit;
}
img{
    width:170px;
    height: 200px;
    object-fit: cover;
    object-position: center;
}

</style>