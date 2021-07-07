/// <reference types="react" />
declare type Props = React.AllHTMLAttributes<HTMLElement> & {
    label?: string;
    icon?: string;
    primary?: boolean;
    select?: boolean;
    critic?: boolean;
};
export declare const ActionButton: ({ label, icon, primary, select, disabled, critic, ...rest }: Props) => JSX.Element;
export {};
