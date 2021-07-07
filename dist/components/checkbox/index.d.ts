import React from 'react';
declare type Props = Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> & {
    checked?: boolean;
    multiple?: boolean;
    label?: string;
    onChange?: (value: boolean) => void;
};
export declare const Checkbox: ({ checked, multiple, label, onChange, ...props }: Props) => JSX.Element;
export {};
