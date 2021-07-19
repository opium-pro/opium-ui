import { Wrapper } from './wrapper';
import { Item } from './item';
export declare type TopMenuType = typeof Wrapper & {
    Item?: typeof Item;
};
export declare const TopMenu: TopMenuType;
