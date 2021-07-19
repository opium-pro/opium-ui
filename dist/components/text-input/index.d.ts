/// <reference types="react" />
export interface ITextInputProps {
    type?: string;
    height?: string;
    valueFont?: any;
    label?: string;
    value?: string;
    placeholder?: string;
    onChange?: any;
    onFocus?: any;
    id?: string;
}
export declare const TextInput: ({ useForm, ...rest }: any) => JSX.Element;
