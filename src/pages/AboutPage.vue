<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>


<template lang="pug">
#about
    header-component
    main
        article
            h1 About
            p.
                This is a project made for people who want to learn to improve
                their craft by people who want to learn to improve their craft.
            h2 About this Project
            p.
                At my job, I faced a lot of issues that were extremely challenging. Although, there are
                a lot of #[a(href="https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world") good tutorials]
                on #[a(href="https://www.youtube.com/@freecodecamp") building applications] which I benefited
                from they did not expose me to a few key things:
            ul
                li
                    | #[strong Iterative / Agile Development]:
                    | Trying to develop features #[em on top of] existing code, while making sure that
                    | parts of the application do not break.
                li
                    | #[strong Complex Software Engineering]:
                    | One of the big challenges was to make sure the API Calls, Database,
                    | Blob Updates (File Storage), Pub Sub Events, Service Bus Messages
                    | — I am working on a AI Based Chat Application — worked together while
                    | gracefully handling failures in case things don't work correctly.
                li
                    | #[strong Communication]:
                    | This is a big one. Especially when one of clients was in a different
                    | side of the globe. So, communications would take #[em a day]. So, even
                    | small miscommunication could lead to delays. Regardless of client's timezone,
                    | it is worth while to learn to how to communicate effectively.
                li
                    | #[strong Changing Requirements]:
                    | Requirements keep changing all the time. You have to keep this in mind
                    | when developing software. However, not all changes can be anticipated.
                    | In those cases, our code needs to be modular and flexible enough
                    | to incorporate those changes.
            p.
                In the programming community there is a lot of talk about
                Tutorial Hell. The response to 'How to avoid Tutorial Hell?' is generally 'Go make stuff'.
            p.
                But, What? How? Should I do it this way or that way?
            p.
                These were the questions that plagued me when I first started out.
            p.
                Software Construction is complex and there is many ways to approach
                a given problem. Each software project also entails it's own set of
                challeges. But, there are some fundamental principles which — when
                applied correctly — can help avoid and mitigate a lot of problems.
            p.
                There is a huge gap between Software Development in Practice and
                Software Development Tutorials. Given the complex and unique nature of
                each software project, this is expected. However, I believe we can make better
                tutorials.
            p.
                This is blog is an attempt to make good tutorials. With all of this in mind,
                 I wanted to focus on a few key things with this project:
            ul
                li
                    | Create a set of tutorials that are part of a whole project or whole projects.
                    | So, that the concepts build towards a project.
                li
                    | Let learners, decide on which modules to incorporate and how.
                li
                    | Come up with a set of requirements and discuss how to implement them.
                li
                    | Explore real world scenarios and discuss how to approach them.
            p
                em - Mameru Carr
            h2 About the Authors
            h3#akshara About Akshara A
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
            h3#mameru About Mameru Carr
            p.
                I am a Software Developer at #[a(href="https://www.linkedin.com/company/adept-labz/") Adept Labz]
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
            &:after
                content: none
            img
                width: 50px

</style>

