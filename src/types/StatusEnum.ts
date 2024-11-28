
const StatusEnum = Object.freeze({
    InProgress: "In Progress",
    Completed: "Completed",
    Todo: "Todo",
    Abandoned: "Abandoned",
    Future: "Future"
});

export type ArticleStatusType = typeof StatusEnum[keyof typeof StatusEnum];
export default StatusEnum;