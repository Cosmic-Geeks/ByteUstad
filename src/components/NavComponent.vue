<script setup lang="ts">
import router from "@/router";
const navItems = ['Articles', 'Snippets', 'About']
</script>

<template lang="pug">
nav.flex.items-center.text-xl
    ul.flex.gap-8
        li(v-for="navItem in navItems" :key="navItem")
            | #[a(@click='router.push({ name: navItem })') {{ navItem }}]
</template>

<style scoped lang="sass">
li
    font-variation-settings: "MONO" 1, "CASL" 0, "wght" 400, "slnt" 0, "CRSV" 0.5
    a
        display: block
</style>