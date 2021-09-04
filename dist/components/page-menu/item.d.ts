import React from 'react';
export declare type Props = React.HTMLAttributes<HTMLElement> & {
    label?: string;
    icon?: string;
    counter?: number;
    active?: boolean;
    link?: string;
};
export default function ({ label, active, icon, counter, link, ...rest }: Props): JSX.Element;
