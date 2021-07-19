/// <reference types="react" />
export interface IWithFormProps {
    useForm?: any;
}
export declare const withForm: (Component: any) => ({ useForm, ...rest }: any) => JSX.Element;
