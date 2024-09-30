<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import useArticlesLoader from "@/stores/articles"
import { useRouter } from "vue-router";

const articlesLoader = useArticlesLoader();
articlesLoader.fetchArticleRoutes();
const articles = articlesLoader.articles;

const router = useRouter();
</script>

<template lang="pug">
main
    template(v-for="article in articles")
        h2
            a(@click="router.push({name: 'HelloWorld'})") {{ article.title }}
</template>

<style lang="sass" scoped>
</style>
