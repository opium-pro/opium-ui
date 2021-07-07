import React from 'react';
declare type Props = React.HTMLAttributes<HTMLElement> & {
    label?: string;
    icon?: string;
    active?: boolean;
};
export declare function Item({ label, active, icon, ...rest }: Props): JSX.Element;
export {};
