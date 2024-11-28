import {defineStore} from "pinia";
import type {Article, Articles} from "@/types/Articles";
import Authors from "@/types/Authors";
import {not} from "@/utils";
import StatusEnum from "@/types/StatusEnum";

const useSnippetsStore = defineStore('snippets', {
    getters: {
        /**
         * From snippets fetch snippets marked as 'Completed'
         * @param state
         */
        getSnippetsByCategory: (state: { snippets: Articles }) => {
            return (params: { tag: string, author: string }) => {
                const articles = state.snippets;
                const { tag, author } = params;
                const organizedByCategory: { [key: string]: { [key: string]: Article } } = {};

                Object.entries(articles).forEach(([key, snippet]) => {
                    const { category, status, authors, tags } = snippet;

                    const authorMatch = not(author)  || authors.includes(author);
                    const tagMatch = not(tag)  || tags.includes(tag);

                    if (snippet.status === StatusEnum.Completed) {
                        if (tagMatch && authorMatch) {
                            // if category doesn't exist add it
                            if (!organizedByCategory[category]) {
                                organizedByCategory[category] = {};
                            }

                            organizedByCategory[category][key] = snippet;
                        }
                    }
                });

                return organizedByCategory;
            }
        },
        tags(state: { snippets: Articles }) {
            const snippets: Articles = {};

            Object.keys(state.snippets).forEach(key => {
                if(state.snippets[key].status === StatusEnum.Completed) {
                    snippets[key] = state.snippets[key];
                }
            });

            const tags: string[] = [];
            Object.keys(snippets).forEach((key) => tags.push(...snippets[key].tags));

            return new Set(tags);
        }
    },
    state: () => ({
        snippets: {
            'HelloWorld': {
                title: 'Hello, World!',
                status: StatusEnum.Completed,
                description: 'Testing only',
                authors: [Authors.Akshara, Authors.Mameru],
                tags: ['Reference', 'Software Architecture'],
                category: 'Architecture',
                date: new Date(2024, 9, 30)
            },
        } as Articles
    }),
});

export default useSnippetsStore;
