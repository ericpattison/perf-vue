declare interface IStoredRoute {
    name?: string;
    path: string;
    has: string;
    query: IDictionary<string>;
    params: IDictionary<string>;
    fullPath: string;
    from?: IStoredRoute;
    meta?: any;
}

declare interface IRootState {
    route: null | IStoredRoute
}