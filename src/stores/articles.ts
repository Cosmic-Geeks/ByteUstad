import {defineStore} from "pinia";
import router from "@/router";

const useArticlesLoader= defineStore('articles', {
    actions: {
        /**
         * Automatically fetch all articles and populate routes
         */
        fetchArticleRoutes() {
            const articleComponents = import.meta.glob(`/src/pages/articles/*.mdx`);

            // Create Child Route For Each Article
            for(const key of Object.keys(articleComponents)) {
                const name = key.split("/").pop()?.replace(".mdx", "");
                router.addRoute('Article', { path: `/article/${name}`, component: articleComponents[key], name });
            }
        }
    },
    state: () => ({
        articles: {
            'HelloWorld': {
                title: 'Hello, World!',
                status: 'In Progress',
                description: 'Testing only',
                authors: ['Akshara A', 'Mameru Carr'],
                date: new Date(2024, 9, 30)
            }
        }
    }),
});

export default useArticlesLoader;