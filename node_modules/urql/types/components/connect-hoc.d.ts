/// <reference types="react" />
import React from 'react';
import { IMutation, IQuery } from '../interfaces/index';
export interface IHOCProps {
    query?: IQuery | IQuery[];
    mutation?: IMutation;
    cache?: boolean;
    typeInvalidation?: boolean;
    shouldInvalidate?: (changedTypes: string[], typeNames: string[], response: object, data: object) => boolean;
}
declare function connect(opts?: IHOCProps | ((_) => IHOCProps)): (Comp: any) => React.ComponentType<any>;
export default connect;
