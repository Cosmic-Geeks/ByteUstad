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
        getArticlesByTag(state: { articles: Articles }) {
            const articles = state.articles;
            return (tag: string) => Object.entries(articles).filter(([key]) => articles[key].tags.includes(tag));
        },
        getTags(state: { articles: Articles }) {
            const articles = state.articles;
            const tags: string[] = [];
            Object.entries(articles).forEach(([key]) => tags.push(...articles[key].tags));
            return new Set(tags);
        }
    },
    state: () => ({
        articles: {
            'HelloWorld': {
                title: 'Hello, World!',
                status: 'Completed',
                description: 'Testing only',
                authors: ['Akshara A', 'Mameru Carr'],
                tags: ['Reference', 'Software Architecture'],
                category: 'Architecture',
                date: new Date(2024, 9, 30)
            },
            'HelloSolarSystem': {
                title: 'Hello, Solar System!',
                status: 'Completed',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                authors: ['Akshara A'],
                category: 'Architecture',
                tags: ['Reference'],
                date: new Date(2024, 9, 30)
            },
            'HelloGalaxy': {
                title: 'Hello, Solar System!',
                status: 'Completed',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                authors: ['Akshara A'],
                category: 'Fundamentals',
                tags: ['Software Architecture'],
                date: new Date(2024, 9, 30)
            }
        } as Articles
    }),
});

export default useArticlesStore;