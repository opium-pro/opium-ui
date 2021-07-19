import { FC } from 'react';
declare type Props = {
    checked?: boolean;
    label?: string;
    name?: string;
    value?: string;
    initialValue?: string;
    radio?: boolean;
    onChange?: (value: boolean) => void;
};
export declare const Toggle: FC<Props>;
export {};
