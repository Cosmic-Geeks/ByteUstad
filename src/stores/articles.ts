import {defineStore} from "pinia";
import type {Article, Articles} from "@/types/articles";
import ArticleStatusEnum from "@/types/ArticleStatusEnum";
import Authors from "@/types/Authors";
import articleStatusEnum from "@/types/ArticleStatusEnum";
import authors from "@/types/Authors";
import {not} from "@/utils";

const useArticlesStore = defineStore('articles', {
    getters: {
        /**
         * From articles fetch articles marked as 'Completed'
         * @param state
         */
        getArticlesByCategory: (state: { articles: Articles }) => {
            return (params: { tag: string, author: string }) => {
                const articles = state.articles;
                const { tag, author } = params;
                const organizedByCategory: { [key: string]: { [key: string]: Article } } = {};

                Object.entries(articles).forEach(([key, article]) => {
                    const { category, status, authors, tags } = article;

                    const authorMatch = not(author)  || authors.includes(author);
                    const tagMatch = not(tag)  || tags.includes(tag);

                    if (article.status === articleStatusEnum.Completed) {
                        if (tagMatch && authorMatch) {
                                // if category doesn't exist add it
                                if (!organizedByCategory[category]) {
                                    organizedByCategory[category] = {};
                                }

                                organizedByCategory[category][key] = article;
                        }
                    }
                });

                return organizedByCategory;
            }
        },
        tags(state: { articles: Articles }) {
            const articles: Articles = {};

            Object.keys(state.articles).forEach(key => {
                if(state.articles[key].status === articleStatusEnum.Completed) {
                    articles[key] = state.articles[key];
                }
            });

            const tags: string[] = [];
            Object.keys(articles).forEach((key) => tags.push(...articles[key].tags));

            return new Set(tags);
        }
    },
    state: () => ({
        articles: {
            'HelloWorld': {
                title: 'Hello, World!',
                status: articleStatusEnum.Completed,
                description: 'Testing only',
                authors: [Authors.Akshara, Authors.Mameru],
                tags: ['Reference', 'Software Architecture'],
                category: 'Architecture',
                date: new Date(2024, 9, 30)
            },
            'HelloSolarSystem': {
                title: 'Hello, Solar System!',
                status: articleStatusEnum.Completed,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                authors: [authors.Mameru],
                category: 'Architecture',
                tags: ['Reference'],
                date: new Date(2024, 9, 30)
            },
            'HelloGalaxy': {
                title: 'Hello, Galaxy!',
                status: 'Completed',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                authors: [authors.Akshara],
                category: 'Fundamentals',
                tags: ['Software Architecture'],
                date: new Date(2024, 9, 30)
            }
        } as Articles
    }),
});

export default useArticlesStore;