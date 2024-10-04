<script setup>
import router from "@/router";
import NavComponent from "@/components/NavComponent.vue";
import MainContainer from "@/components/Layout/MainContainer.vue";
</script>

<template lang="pug">
header
    .flex.flex-row.justify-between.flex-wrap.m-4.p-4
        p.text-3xl.font-title(@click="router.push({name: 'Home'})")
            | ByteUstad
        nav-component
</template>

<style lang="sass" scoped>
header
    border-bottom: 2px solid firebrick
    p
        margin-left: 0.5rem
        font-variation-settings: "MONO" 0, "CASL" 0.5, "wght" 500, "slnt" 0, "CRSV" 0.5
        cursor: pointer
</style>