import React from 'react';
declare type Props = React.AllHTMLAttributes<HTMLElement> & {
    icon: string;
    fill?: string;
    [key: string]: any;
};
export declare const IconButton: ({ icon, fill, line, ...rest }: Props) => JSX.Element;
export {};
