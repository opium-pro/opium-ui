import { FC } from "react";
export declare const SIZE: {
    sm: {
        circle: string;
        font: string;
    };
    md: {
        circle: string;
        font: string;
    };
    lg: {
        circle: string;
        font: string;
    };
};
export interface IAvatarProps {
    name?: string;
    img?: string;
    fill?: string;
    size?: keyof typeof SIZE;
    icon?: string;
}
export declare const Avatar: FC<IAvatarProps>;
