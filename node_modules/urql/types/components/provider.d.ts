/// <reference types="react" />
import { Component, ReactNode } from 'react';
import { IClient } from '../interfaces/index';
export interface IProviderProps {
    children: ReactNode;
    client: IClient;
}
export default class Provider extends Component<IProviderProps> {
    render(): JSX.Element;
}
