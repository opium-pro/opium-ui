import { Wrapper } from './wrapper';
import { Item } from './item';
export declare type TopMenuType = typeof Wrapper & {
    Item?: typeof Item;
};
declare const TopMenu: TopMenuType;
export { TopMenu };
