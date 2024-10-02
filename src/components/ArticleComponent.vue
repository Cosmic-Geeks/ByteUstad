<script setup lang="ts">
import router from "@/router";
import {formatDate} from "@/utils";
import { defineProps } from "vue";
import type {Article} from "@/types/articles";
const props = defineProps({
    article: {
        required: true,
        type: Object as () => Article
    },
    name: {
        required: true,
        type: String
    }
});
</script>

<template lang="pug">
.card(@click="router.push({name: name})")
    h3 {{ article.title }}
    p.date {{ formatDate(article.date) }}
    p.description {{ article.description }}
</template>

<style scoped lang="sass">
h3
    text-align: left
    font-variation-settings: "MONO" 1, "CASL" 0, "wght" 800, "slnt" 0, "CRSV" 1
.card
    max-width: 75ch
    padding: 1rem
    border-bottom: 2px solid firebrick
    grid-column: -1
    .date
        font-size: 0.90rem
        font-variation-settings: "MONO" 0.5, "CASL" 1, "wght" 400, "slnt" 0, "CRSV" 1
    .description
        margin-top: 0.5rem
        font-variation-settings: "MONO" 0.5, "CASL" 0.5, "wght" 400, "slnt" 0, "CRSV" 1
.card + .card
    margin-top: 0.5rem
</style>