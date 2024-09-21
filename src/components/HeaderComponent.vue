<script setup>
import router from "@/router";
import NavComponent from "@/components/NavComponent.vue";
</script>


<template lang="pug">
header.flex.justify-center
    .header.flex.justify-between
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
        font-variation-settings: "MONO" 0, "CASL" 0.5, "wght" 500, "slnt" 0, "CRSV" 0.5
</style>