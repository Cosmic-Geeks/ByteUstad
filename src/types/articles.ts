import type {ArticleStatusType} from "@/types/ArticleStatusEnum";

export interface Article {
    title: string;
    description: string;
    status: ArticleStatusType
    authors: string[],
    tags: string[],
    category: string,
    date: Date
}

export interface Articles {
    [key: string]: Article;
}