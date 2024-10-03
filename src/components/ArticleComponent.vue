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
    p.date &#x1F4C5: {{ formatDate(article.date) }}
    p.tags
        | &#x1F3F7:&nbsp;
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
    text-align: left
    cursor: pointer
    font-variation-settings: "MONO" 1, "CASL" 0, "wght" 800, "slnt" 0, "CRSV" 1
    transition: box-shadow 0.3s ease-out
    &:hover
         text-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
.card
    max-width: 75ch
    padding: 1rem
    border-bottom: 2px solid firebrick
    grid-column: -1
    .date
        font-size: 0.8rem
        font-variation-settings: "MONO" 0.5, "CASL" 0.5, "wght" 500, "slnt" 0, "CRSV" 1
    .tags
        color: lightslategrey
        font-size: 0.8rem
        font-variation-settings: "MONO" 0.5, "CASL" 0.5, "wght" 500, "slnt" 0, "CRSV" 1
        .active
            color: black
            font-variation-settings: "MONO" 0.5, "CASL" 0.5, "wght" 500, "slnt" 0, "CRSV" 1
        a
            transition: color 0.3s ease-out
            &:hover
                color: black
    .authors
        font-size: 0.9rem
        a
            transition: color 0.3s ease-out
            &:hover
                color: deepskyblue
    .description
        margin-top: 0.5rem
        font-variation-settings: "MONO" 0.5, "CASL" 0.5, "wght" 400, "slnt" 0, "CRSV" 1
        a
            color: firebrick
.card + .card
    margin-top: 0.5rem
.authors
    a
        font-variation-settings: "MONO" 0, "CASL" 1, "wght" 400, "slnt" 0, "CRSV" 1
</style>