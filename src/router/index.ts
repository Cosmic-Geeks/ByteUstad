import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@/pages/HomePage.vue";
import ArticlesPage from "@/pages/ArticlesPage.vue";
import ArticlePage from "@/pages/ArticlePage.vue";
import AboutPage from "@/pages/AboutPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            "path": "/",
            "component": HomePage,
            "name": "Home"
        },
        {
            "path": "/about",
            "component": AboutPage,
            "name": "About"
        },
        {
            "path": "/articles",
            "component": ArticlesPage,
            "name": "Articles"
        },
        {
            "path": "/article",
            "component": ArticlePage,
            "name": "Article",
            "children": [
                {
                    "path": "HelloWorld",
                    "component": () => import('@/pages/articles/HelloWorld.mdx'),
                    "name": "HelloWorld"
                },
            ]
        },
    ]
})

export default router
