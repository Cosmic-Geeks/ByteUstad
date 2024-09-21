<script setup lang="ts">
import router from "@/router";
import HeaderComponent from "@/components/HeaderComponent.vue";

const navItems = ['Articles', 'Snippets', 'About', 'Resources']
</script>

<template lang="pug">
.flex.justify-center.items-center.min-h-screen
    #welcome.flex.flex-col.space-y-4
        h1.text-center.text-6xl
            | Welcome To ByteUstad
        p.text-center.text-3xl
            | A blog by #[a(href="/about#akshara" class="author") Akshara A] and #[a(href="/about#mameru" class="author") Mameru Carr]
        nav
            ul.flex.justify-between.text-2xl
                li(v-for="navItem in navItems" :key="navItem")
                    | #[a(@click='router.push({ name: navItem })') {{ navItem }}]
</template>

<style lang="sass">
#welcome
    h1
        font-variation-settings: "MONO" 0, "CASL" 0.5, "wght" 500, "slnt" 0, "CRSV" 0.5
    p
        font-variation-settings: "MONO" 1, "CASL" 0, "wght" 500, "slnt" 0, "CRSV" 0.5
        a
            font-variation-settings: "MONO" 0, "CASL" 1, "wght" 500, "slnt" 0, "CRSV" 1
    li
        text-transform: uppercase
        font-variation-settings: "MONO" 1, "CASL" 0, "wght" 400, "slnt" 0, "CRSV" 0.5
        a
            display: block
</style>
