<script setup lang="ts">
import router from "@/router";
import {formatDate} from "@/utils";
import {computed, defineProps, ref} from "vue";
import type {Article} from "@/types/articles";
import {useRoute} from "vue-router";
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

const authors = props.article.authors;
const tags = props.article.tags;

const route = useRoute();
const query = computed(() => route.query);
</script>

<template lang="pug">
.card
    h3(@click="router.push({name: name})") {{ article.title }}
    p.authors
        template(v-for="(author, index) in authors" :key="author")
            a(@click="router.push({ name: 'Articles', query: {author: author}})") {{ author }}
            template(v-if="index < authors.length - 2") ,
            template(v-else-if="index === authors.length - 2")  {{ authors.length > 2 ? ',' : '' }} and&nbsp;
    p.date {{ formatDate(article.date) }}
    p.tags
        template(v-for="(tag, index) in tags" :key="tag")
            a(@click="query.tag === tag ? router.push({ name: 'Articles' }) : router.push({ name: 'Articles', query: {tag: tag}})"
                :class="{ active: query.tag === tag }") {{ tag }}
            template(v-if="index < authors.length - 1") ,&nbsp;
    p.description
        | {{ article.description }}
        | #[a(@click="router.push({ name: name })") Read Article]
</template>

<style scoped lang="sass">
h3
    cursor: pointer
    transition: all 0.3s ease-out
    &:hover
        transform: scale3d(0, -2px, 0)
        text-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
.card
    border-bottom: 2px solid firebrick
    padding-left: 0.5rem
    padding-bottom: 1rem
    .date
        color: lightslategray
        font-variation-settings: "MONO" 0.5, "CASL" 0.5, "wght" 400, "slnt" 0, "CRSV" 1
        &:before
            content: "\1F4C5\00a0"
    .tags
        color: navy
        font-variation-settings: "MONO" 0.5, "CASL" 0.5, "wght" 500, "slnt" 0, "CRSV" 1
        &:before
            content: "\1F3F7\00a0"
        .active
            color: deepskyblue
            font-variation-settings: "MONO" 0.5, "CASL" 0.5, "wght" 500, "slnt" 0, "CRSV" 1
        a
            transition: color 0.3s ease-out
            &:hover
                color: deepskyblue
    .authors
        &:before
            content: "By\00a0"
    .description
        margin-top: 0.5rem
        font-variation-settings: "MONO" 0.5, "CASL" 0.5, "wght" 400, "slnt" 0, "CRSV" 1
        a
            color: orangered
</style>