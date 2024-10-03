<script setup lang="ts">
import MainContainer from "@/components/Layout/MainContainer.vue";
import ArticleLayout from "@/components/Layout/ArticleLayout.vue";
</script>

<template lang="pug">
.wrapper
    main-container
        main
            article-layout
                slot
</template>

<style scoped lang="sass">

</style>