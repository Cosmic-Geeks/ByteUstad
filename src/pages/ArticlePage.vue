<script setup>
import {RouterView, useRouter} from 'vue-router'
import useArticlesLoader from "@/stores/articles";
import {onMounted} from "vue";

const articlesLoader = useArticlesLoader();
onMounted(() => {
    articlesLoader.fetchArticleRoutes();
});

</script>

<template lang="pug">
main
    router-view
</template>

<style scoped lang="sass">
</style>
