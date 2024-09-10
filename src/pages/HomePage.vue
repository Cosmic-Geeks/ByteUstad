<script setup lang="ts">

</script>

<template lang="pug">
.flex.justify-center.items-center.min-h-screen
    #welcome.flex.flex-col.space-y-4
        h1.text-center.text-7xl.font-title
            | Welcome To ByteUstad
        p.text-center.text-4xl
            | A blog by #[a(href="#" class="author") Akshara A] and #[a(href="#" class="author") Mameru Carr]
        nav.text-2xl
            ul.flex.justify-between.text-2xl
                li
                    a(href="#")
                        | Categories
                li
                    a(href="#")
                        | Articles
                li
                    a(href="#")
                        | About 
</template>

<style scoped lang="sass">
#welcome
    p
        font-family: "Alegreya", serif
    nav
        ul
            li
                a
                    font-family: "Josefin Sans", serif
                    text-transform: uppercase
    .author
        font-family: Courgette, serif
</style>
