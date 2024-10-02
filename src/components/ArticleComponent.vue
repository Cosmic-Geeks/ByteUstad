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
    h2 {{ article.title }}
    p.date {{ formatDate(article.date) }}
    p.description {{ article.description }}
</template>

<style scoped lang="sass">

</style>