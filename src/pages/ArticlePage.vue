<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<template lang="pug">
.wrapper
    header-component
    main
        router-view
</template>

<style scoped lang="sass">
</style>
