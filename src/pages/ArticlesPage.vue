<script setup>
import useArticlesStore from "@/stores/articles"
import { useRouter } from "vue-router";
import {storeToRefs} from "pinia";
import {ref} from "vue";
import { formatDate } from "../utils";
import ArticleComponent from "@/components/ArticleComponent.vue";

const router = useRouter();
const articlesStore = useArticlesStore();
const articlesByCategory = articlesStore.getArticlesByCategory;
</script>

<template lang="pug">
main
    .articles
        template(v-for="(articles, category) in articlesByCategory" :key="category")
            h2 {{ category }}
            template(v-for="article of articles" :key="article")
                p {{ article.title }}
</template>

<style lang="sass" scoped>
h2
    font-variation-settings: "MONO" 0, "CASL" 1, "wght" 700, "slnt" -15, "CRSV" 1
    font-size: 1.5rem
.card
    max-width: 75ch
    padding: 1rem
    border-bottom: 2px solid firebrick
    .date
        font-size: 0.90rem
        font-variation-settings: "MONO" 0.5, "CASL" 1, "wght" 400, "slnt" 0, "CRSV" 1
    .description
        margin-top: 0.5rem
        font-variation-settings: "MONO" 0.5, "CASL" 0.5, "wght" 400, "slnt" 0, "CRSV" 1
.card + .card
    margin-top: 1rem
</style>
