/// <reference types="react" />
declare type Props = React.AllHTMLAttributes<HTMLElement> & {
    fields: any;
    onSubmit: any;
};
export declare function Form({ children, onSubmit, fields }: Props): JSX.Element;
export {};
