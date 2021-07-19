import React from 'react';
declare type Props = React.HTMLAttributes<HTMLElement> & {
    label?: string;
    icon?: string;
    active?: boolean;
    prompt?: string;
};
export declare function Item({ label, active, icon, prompt, ...rest }: Props): JSX.Element;
export {};
