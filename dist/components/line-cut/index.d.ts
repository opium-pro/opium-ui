import React from 'react';
declare type Props = React.AllHTMLAttributes<HTMLElement> & {
    lines?: number;
    lineHeight?: string;
};
export declare const LineCut: ({ children, lines, lineHeight, ...rest }: Props) => JSX.Element;
export {};
