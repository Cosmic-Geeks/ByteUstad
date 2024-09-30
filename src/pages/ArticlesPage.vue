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
    template(v-for="[key, article] in articles")
        h2
            a(@click="router.push({name: 'HelloWorld'})") {{ article.title }}
</template>

<style lang="sass" scoped>
</style>
