import type {ArticleStatusType} from "@/types/ArticleStatusEnum";

export interface Article {
    title: string;
    description: string;
    status: ArticleStatusType
    authors: string[],
    date: Date
}

export interface Articles {
    [key: string]: Article;
}