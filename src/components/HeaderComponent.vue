<script setup>
import router from "@/router";
</script>


<template lang="pug">
header.flex
    h1 
        | ByteUstad
    nav
        ul
            li
                | #[a(href="#") Categories]
            li
                | #[a(@click="router.push({name: 'Articles'})") Articles]
            li
                | #[a(href="#") About]
</template>

<style lang="sass" scoped>

</style>
