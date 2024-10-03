<script setup>
import useArticlesStore from "@/stores/articles"
import { useRouter, useRoute } from "vue-router";
import {storeToRefs} from "pinia";
import {computed, ref} from "vue";
import { formatDate } from "../utils";
import ArticleComponent from "@/components/ArticleComponent.vue";
import PageLayout from "@/components/Layout/PageLayout.vue";

const router = useRouter();
const route = useRoute();
const query = computed(() => route.query);
const { getArticlesByCategory, tags } = storeToRefs(useArticlesStore());
const articlesByCategory = computed(() => getArticlesByCategory.value({ tag: query.value.tag, author: query.value.author }));
</script>

<template lang="pug">
page-layout
    h1 Browse Articles
    h2 Tags
    p.tags
        | #[a(@click="router.push({name: 'Articles'})") All]
        template(v-for="tag in tags" :key="tag")
            a(@click="query.tag === tag ? router.push({name: 'Articles'}) : router.push({name: 'Articles', query: { tag: tag }})"
                :class="{ active: query.tag === tag }") {{ tag }}
    template(v-for="(articles, category) in articlesByCategory" :key="category")
        h2 {{ category }}
        template(v-for="(article, name) of articles" :key="name")
            p
                article-component(:article="article" :name="name")
</template>

<style lang="sass" scoped>
.tags
    display: flex
    cursor: pointer
    flex-wrap: wrap
    font-variation-settings: "MONO" 0, "CASL" 1, "wght" 600, "slnt" 0, "CRSV" 1
    font-size: 0.9rem
    align-content: center
    a
        margin: 0 0.5rem 0.5rem
        padding: 0.5rem
        color: firebrick
        border-radius: 2rem
        border: 1.5px solid firebrick
        transition: all 0.5s ease-out
        &:hover
            background-color: firebrick
            color: white
            transform: translate3d(0px, -5px, 0px)
            box-shadow: 0 10px 20px rgba(0,0,0,0.15), 0 6px 6px rgba(0,0,0,0.20)
    .active
        background-color: gold
        border: 2px solid gold
        &:hover
            border: 2px solid firebrick
</style>
