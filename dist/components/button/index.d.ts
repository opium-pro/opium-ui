import React from 'react';
declare type Props = React.AllHTMLAttributes<HTMLElement> & {
    label?: string;
    primary?: boolean;
    type?: string;
    mini?: boolean;
};
export declare const Button: ({ label, primary, type, disabled, mini, ...rest }: Props) => JSX.Element;
export {};
