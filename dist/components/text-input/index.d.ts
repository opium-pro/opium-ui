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
    onBlur?: any;
    id?: string;
    error?: string | boolean;
    name?: string;
    disabled?: boolean;
}
export declare const TextInput: ({ onChange, value, name, match, error, onBlur, mask, disabled, radio, ...rest }: any) => JSX.Element;
