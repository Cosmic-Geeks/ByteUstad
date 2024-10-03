<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import PageLayout from "@/components/Layout/PageLayout.vue";
</script>

<template lang="pug">
page-layout
    h1 About
    p.
        This is a project made for people who are learning to improve
        their craft by people who are learning to improve their craft.
    h2 About this Project
    p.
        This is a project aimed at #[em Advanced Beginners]. We define
        Advanced Beginners as beginners who know a lot of the basics
        but want to take their skills to the next level (intermediate).
    p.
        With that in mind, the blog focuses on the following aspects of
        Software Development:
    ul
        li
            | #[strong Iterative / Agile Development]:
            | Trying to develop features #[em on top of] existing code, while making sure that
            | parts of the application do not break.
        li.
            #[strong Software Engineering]:
            One of the big challenges that beginners face is to integrate various technologies
            together. It is not enough to know how to write an #[Azure Function] for a
            #[code Service Bus Trigger], you need to know the potential pitfalls and
            their solutions, you need to know how to use #[code WebPubSub] to trigger UI events,
            you need to make sure that #[code Database] updates are working correctly. You need
            to know how to interweave all these components so that the feature works as expected. All while
            making sure that #[em even if] the code or system happens to fail — it does so gracefully.
        li.
            #[strong Communication]:
            Communication is an integral part of Software Development. Be it communicating with your
            manager, seniors, clients or users. It is very important to know how to communicate
            effectively.
        li.
            #[strong Changing Requirements]:
            Requirements keep changing all the time. You have to keep this in mind
            when developing software. However, not all changes can be anticipated.
            In those cases, our code needs to be modular and flexible enough
            to incorporate those changes.
        li.
            #[strong Fundamentals]:
            Software Construction is complex and there is many ways to approach
            a given problem. Each software project also entails it's own set of
            challeges. But, there are some fundamental principles which — when
            applied correctly — can help avoid and mitigate a lot of problems.
        li.
            #[strong Project Based Tutorials]:
            You might have heard of #[code Tutorial Hell] or you might have been
            through it already. The general answer to 'How to get out of Tutorial Hell'
            is usually 'Make Stuff'. But, what? How? Which way is better? etc. are questions
            that plague beginners.
    p.
        So in short, what you will find in this blog are Practical Project Based Tutorials, and the
        Fundamental Concepts that help to make better software.

    h2 About the Authors
    h3#akshara Akshara A
    ul.links.flex.flex-wrap.flex-row
        li
            a(href="https://www.linkedin.com/in/akshara-a/" target="_blank")
                img(src="/logos/icons8-linkedin.svg")
        li
            a(href="https://github.com/akshara-a" target="_blank")
                img(src="/logos/github-mark.svg")
        li
            a(href="https://toherchoice.blogspot.com" target="_blank")
                img(src="/logos/icons8-blogger.svg")
    p.
        I am a software developer at #[a(href="https://www.linkedin.com/company/propelinc/") Propel Technology Group Inc.]
    p.
        I am a Technology Management Specialist with a passion for inspiring the next generation. I’ve mentored over 2K individuals in areas like Programming, Web Development, Database Management, UI/UX design, Graphic design, Digital Marketing, and Content Writing. My diverse roles at Tech Quest Consultancy, from ‘Head of IT’ to ‘Mentor,’ have allowed me to guide teams toward success and unlock their potential. Whether it’s coding or mentoring, I’m committed to making a positive impact in the tech world.
    h3#mameru Mameru Carr
    ul.links.flex.flex-wrap.flex-row
        li
            a(href="https://www.linkedin.com/in/mameru-carr/" target="_blank")
                img(src="/logos/icons8-linkedin.svg")
        li
            a(href="https://github.com/mameru-carr/" target="_blank")
                img(src="/logos/github-mark.svg")
    p.
        I am a curious and passionate Junior Software Engineer at #[a(href="https://www.linkedin.com/company/adept-labz/") Adept Labz]. My personal focus is on creating user interfaces and systemic solutions that enables people to expand what they can think, do and express. I am proficient in multiple languages while focusing on full-stack development.
        When I am not programming, I am usually writing (at #[a(href="https://mameru.vercel.app/") The Lonely Mountain]), and when I am not writing I am drawing.
</template>

<style lang="sass" scoped>
.links
    li
        margin: 0.5rem
        padding-left: 0
        &:before
            content: none
        a
            display: block
            transition: all 0.5s ease-out
            &:after
                content: none
            &:hover
                transform: translate3d(0px, -5px, 0px)
                box-shadow: 0 10px 20px rgba(0,0,0,0.15), 0 6px 6px rgba(0,0,0,0.20)
            img
                width: 50px
</style>