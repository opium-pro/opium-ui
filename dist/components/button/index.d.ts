import React from 'react';
declare type Props = React.AllHTMLAttributes<HTMLElement> & {
    label?: string;
    primary?: boolean;
    type?: string;
    mini?: boolean;
    critic?: boolean;
};
export declare const Button: ({ label, primary, type, disabled, mini, critic, ...rest }: Props) => JSX.Element;
export {};
