/// <reference types="react" />
import { Component, ReactNode } from 'react';
import { ICache, IMutation, IQuery } from '../interfaces/index';
export interface IConnectProps<Data, Mutations> {
    children: (props: UrqlProps<Data, Mutations>) => ReactNode;
    query?: IQuery | IQuery[];
    mutation?: IMutation;
    cache?: boolean;
    typeInvalidation?: boolean;
    shouldInvalidate?: (changedTypes: string[], typeNames: string[], response: object, data: object) => boolean;
}
/**
 * Urql's render props.
 */
export declare type UrqlProps<Data, Mutations = {}> = {
    /**
     * Urql cache
     */
    cache: ICache;
    /**
     * The data returned by your Urql query.
     */
    data: Data | null;
    /**
     * Query error, if present.
     */
    error: any;
    /**
     * Returns true if Urql is fetching data
     */
    fetching: boolean;
    /**
     * This is like loading but it's false by default, and becomes true after
     * the first time your query loads. This makes initial loading states easy
     * and reduces flicker on subsequent fetch/refetches.
     */
    loaded: boolean;
    /**
     * Manually refetch the query. You can skip the cache, hit the server
     * and repopulate the cache by calling this like `refetch({ skipCache: true })`.
     */
    refetch: (options: {
        skipFetch?: boolean;
    }, initial?: boolean) => void;
    /**
     * Manually refetch all queries from the cache.
     */
    refreshAllFromCache: () => void;
} & Mutations;
export default class Connect<Data = {}, Mutations = {}> extends Component<IConnectProps<Data, Mutations>> {
    render(): JSX.Element;
}
