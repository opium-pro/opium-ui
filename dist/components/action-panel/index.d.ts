import React from 'react';
declare type Props = React.AllHTMLAttributes<HTMLElement> & {
    width?: number;
    show?: boolean;
    status?: string;
    comission?: string;
    sum?: string;
};
export declare const ActionPanel: ({ children, status, comission, sum }: Props) => JSX.Element;
export {};
