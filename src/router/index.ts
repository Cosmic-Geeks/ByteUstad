import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/pages/HomePage.vue";
import ArticlesPage from "@/pages/ArticlesPage.vue";
import ArticlePage from "@/pages/ArticlePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      "path": "/",
      "component": HomePage,
      "name": "Home"
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
