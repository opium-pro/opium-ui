import React from 'react';
declare type Props = React.AllHTMLAttributes<HTMLElement> & {
    value: string | number;
    attention?: boolean;
    base?: boolean;
};
export declare const Counter: ({ value, attention, base }: Props) => JSX.Element;
export {};
