<script setup lang="ts">
import router from "@/router";
import {computed} from "vue";
const navItems = ['Articles', 'Snippets', 'About', 'Resources']
const currentRoute = computed(() => router.currentRoute.value.name);
</script>

<template lang="pug">
nav.flex.items-center.text-xl
    ul.flex.justify-between.flex-wrap
        li(v-for="navItem in navItems" :key="navItem" :class="{active: currentRoute === navItem }").mx-2
            | #[a(@click='router.push({ name: navItem })') {{ navItem }}]
</template>

<style scoped lang="sass">
li
    font-variation-settings: "MONO" 1, "CASL" 0, "wght" 400, "slnt" 0, "CRSV" 0.5
    a
        display: block
.active
    text-decoration: underline
    text-decoration-color: deepskyblue
</style>