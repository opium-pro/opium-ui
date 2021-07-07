/// <reference types="react" />
declare type Props = React.HTMLAttributes<HTMLElement> & {
    label: string;
    type: string;
} | any;
export declare const Status: ({ label, type, large, ...props }: Props) => JSX.Element;
export {};
