import {defineStore} from "pinia";
import type {Article, Articles} from "@/types/articles";
import ArticleStatusEnum from "@/types/ArticleStatusEnum";
import Authors from "@/types/Authors";
import articleStatusEnum from "@/types/ArticleStatusEnum";

const useArticlesStore = defineStore('articles', {
    getters: {
        /**
         * From articles fetch articles marked as 'Completed'
         * @param state
         */
        getArticlesByCategory: (state: { articles: Articles }) => {
            const articles = state.articles;
            const organizedByCategory: { [key: string]: { [key: string]: Article } } = {};

            Object.keys(articles).forEach(key => {
                const article = articles[key];
                const category = article.category;

                if (article.status === articleStatusEnum.Completed) {
                    // if category doesn't exist add it
                    if (!organizedByCategory[key]) {
                        organizedByCategory[category] = {};
                    }

                    organizedByCategory[category][key] = article;
                }
            });

            // return Object.entries(articles).filter(
            //         ([key]) =>
            //             articles[key].status === ArticleStatusEnum.Completed
            //     )
            return organizedByCategory;
        },
        getArticlesByTag(state: { articles: Articles }) {
            const articles = state.articles;
            return (tag: string) => Object.entries(articles).filter(([key]) => articles[key].tags.includes(tag));
        },
        getTags(state: { articles: Articles }) {
            const articles = state.articles;
            const tags: string[] = [];
            Object.keys(articles).forEach(([key]) => tags.push(...articles[key].tags));
            console.log(tags);
            return new Set(tags);
        }
    },
    state: () => ({
        articles: {
            'HelloWorld': {
                title: 'Hello, World!',
                status: 'Completed',
                description: 'Testing only',
                authors: [Authors.Akshara, Authors.Mameru],
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