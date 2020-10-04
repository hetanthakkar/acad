import { ICache, IClientOptions, IMutation, IQuery } from '../interfaces/index';
export interface IQueryResponse {
    data: object[];
    typeNames?: string[];
}
export declare const defaultCache: (store: any) => {
    invalidate: (hash: any) => Promise<{}>;
    invalidateAll: () => Promise<{}>;
    read: (hash: any) => Promise<{}>;
    update: (callback: any) => Promise<{}>;
    write: (hash: any, data: any) => Promise<{}>;
};
export default class Client {
    url?: string;
    store: object;
    fetchOptions: RequestInit | (() => RequestInit);
    subscriptions: object;
    cache: ICache;
    constructor(opts?: IClientOptions);
    updateSubscribers(typenames: any, changes: any): void;
    subscribe(callback: (changedTypes: string[], response: object) => void): string;
    unsubscribe(id: string): void;
    refreshAllFromCache(): Promise<{}>;
    executeQuery(queryObject: IQuery, skipCache: boolean): Promise<IQueryResponse>;
    executeMutation(mutationObject: IMutation): Promise<object[]>;
}
