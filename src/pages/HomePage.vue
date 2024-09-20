<script setup lang="ts">
import router from "@/router";
import HeaderComponent from "@/components/HeaderComponent.vue";

const navItems = ['Articles', 'Snippets', 'About']
</script>

<template lang="pug">
.flex.justify-center.items-center.min-h-screen
    #welcome.flex.flex-col.space-y-4
        h1.text-center.text-7xl
            | Welcome To ByteUstad
        p.text-center.text-4xl
            | A blog by #[a(href="#" class="author") Akshara A] and #[a(href="#" class="author") Mameru Carr]
        nav
            ul.flex.justify-between.text-3xl
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
            font-variation-settings: "MONO" 0, "CASL" 1, "wght" 500, "slnt" 0, "CRSV" 0.5
    li
        text-transform: uppercase
        font-variation-settings: "MONO" 1, "CASL" 0, "wght" 400, "slnt" 0, "CRSV" 0.5
        a
            display: block
</style>
