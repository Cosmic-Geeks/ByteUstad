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
    article
        h1 Browse Articles
        template(v-for="(articles, category) in articlesByCategory" :key="category")
            h2 {{ category }}
            template(v-for="(article, name) of articles" :key="name")
                article-component(:article="article" :name="name")
</template>

<style lang="sass" scoped>
h2
    font-variation-settings: "MONO" 0, "CASL" 1, "wght" 700, "slnt" -15, "CRSV" 1
    font-size: 1.5rem
    padding: 1rem
</style>
