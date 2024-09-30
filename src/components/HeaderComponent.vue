<script setup>
import NavComponent from "@/components/NavComponent.vue";
</script>

<template lang="pug">
header.flex.justify-center
    .header.flex.justify-between.flex-wrap
        p.text-3xl.font-title
            | ByteUstad
        nav-component
</template>

<style lang="sass" scoped>
header
    border-bottom: 2px solid firebrick
    padding: 1rem
    .header
        width: 60%
    p
        margin-left: 0.5rem
        font-variation-settings: "MONO" 0, "CASL" 0.5, "wght" 500, "slnt" 0, "CRSV" 0.5
</style>