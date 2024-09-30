
const ArticleStatusEnum = Object.freeze({
    InProgress: "In Progress",
    Completed: "Completed",
    Todo: "Todo",
    Abandoned: "Abandoned",
    Future: "Future"
});

export type ArticleStatusType = typeof ArticleStatusEnum[keyof typeof ArticleStatusEnum];
export default ArticleStatusEnum;