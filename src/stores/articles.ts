import {defineStore} from "pinia";
import type {Articles} from "@/types/articles";
import ArticleStatusEnum from "@/types/ArticleStatusEnum";

const useArticlesStore = defineStore('articles', {
    getters: {
        /**
         * From articles fetch articles marked as 'Completed'
         * @param state
         */
        getArticles: (state: { articles: Articles }) => {
            const articles = state.articles;
            return Object.entries(articles).filter(
                    ([key]) =>
                        articles[key].status === ArticleStatusEnum.Completed
                )
        },
    },
    state: () => ({
        articles: {
            'HelloWorld': {
                title: 'Hello, World!',
                status: 'Completed',
                description: 'Testing only',
                authors: ['Akshara A', 'Mameru Carr'],
                date: new Date(2024, 9, 30)
            }
        } as Articles
    }),
});

export default useArticlesStore;