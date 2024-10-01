<script setup>
import useArticlesStore from "@/stores/articles"
import { useRouter } from "vue-router";
import {storeToRefs} from "pinia";

const router = useRouter();
const articlesStore = useArticlesStore();
const articles = articlesStore.getArticles;
</script>

<template lang="pug">
main
    .articles
        template(v-for="[key, article] in articles" :key="key")
            .card
                h2
                    a(@click="router.push({name: 'HelloWorld'})") {{ article.title }}
                p {{ article.description }}
</template>

<style lang="sass" scoped>
h2
    font-variation-settings: "MONO" 0, "CASL" 1, "wght" 700, "slnt" -15, "CRSV" 1
    font-size: 1.5rem
.card
    max-width: 75ch
.card + .card
    margin-top: 1rem
</style>
