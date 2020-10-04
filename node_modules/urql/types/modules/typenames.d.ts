import { IQuery } from '../interfaces/index';
export declare function formatTypeNames(query: IQuery): {
    query: string;
    variables: object;
};
export declare function gankTypeNamesFromResponse(response: object): any[];
