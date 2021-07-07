/// <reference types="react" />
declare type Props = React.HTMLAttributes<HTMLElement> & {
    label?: string;
    icon?: string;
    active?: boolean;
};
export declare function Item({ label, icon, active, ...rest }: Props): JSX.Element;
export {};
