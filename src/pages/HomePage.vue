<script setup lang="ts">

</script>

<template lang="pug">
.flex.justify-center.items-center.min-h-screen
    #welcome
        h1.text-center.text-7xl.font-title.my-4
            | Welcome To ByteUstad
        p.text-center.text-4xl
            | A blog by #[a(href="#") Akshara A] and #[a(href="#") Mameru Carr]
</template>

<style scoped lang="sass">
#welcome
    p
        font-family: Alegreya, serif
    a
        text-decoration: underline
        font-family: Courgette, serif
</style>