/// <reference types="react" />
import { Component, ReactNode } from 'react';
import { IClient, IMutation, IQuery } from '../interfaces/index';
export interface IClientProps {
    client: IClient;
    children: (obj: object) => ReactNode;
    query: IQuery | IQuery[];
    mutation?: IMutation;
    cache?: boolean;
    typeInvalidation?: boolean;
    shouldInvalidate?: (changedTypes: string[], typeNames: string[], response: object, data: object) => boolean;
}
export interface IClientFetchOpts {
    skipCache: boolean;
}
export interface IClientState {
    fetching: boolean;
    loaded: boolean;
    error?: Error;
    data: object[] | IClientState[];
}
export default class UrqlClient extends Component<IClientProps, IClientState> {
    static defaultProps: {
        cache: boolean;
        typeInvalidation: boolean;
    };
    state: {
        data: any;
        error: any;
        fetching: boolean;
        loaded: boolean;
    };
    query: any;
    mutations: {};
    typeNames: any[];
    subscriptionID: any;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    invalidate: (queryObject: any) => Promise<any>;
    invalidateAll: () => Promise<any>;
    read: (query: any) => Promise<any>;
    updateCache: (callback: any) => Promise<any>;
    formatProps: (props: any) => void;
    update: (changedTypes: any, response: any, refresh: any) => void;
    refreshAllFromCache: () => void;
    fetch: (opts?: IClientFetchOpts, initial?: boolean) => Promise<void>;
    mutate: (mutation: any) => Promise<{}>;
    render(): {};
}
