import React from 'react';
declare type Props = React.HTMLAttributes<HTMLAnchorElement> & {
    offset?: string;
    disabled?: boolean;
    radius?: string;
    track?: string | string[];
    fade?: boolean;
};
export declare const MakeButton: ({ children, offset, disabled, radius, track, fade, ...rest }: Props) => JSX.Element;
export {};
