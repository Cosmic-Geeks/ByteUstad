import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@/pages/HomePage.vue";
import ArticlePage from "@/pages/ArticlePage.vue";
import SnippetsPage from "@/pages/SnippetsPage.vue";
import ResourcesPage from "@/pages/ResourcesPage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import ArticlesPage from "@/pages/ArticlesPage.vue";

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
            "path": "/snippets",
            "component": SnippetsPage,
            "name": "Snippets"
        },
        {
            "path": "/resources",
            "component": ResourcesPage,
            "name": "Resources"
        },
        {
            "path": "/article",
            "component": ArticlePage,
            "name": "Article",
        },
    ]
})

export default router;
