import Wrapper from './wrapper';
import Item from './item';
declare type PageMenuType = typeof Wrapper & {
    Item?: typeof Item;
};
export declare const PageMenu: PageMenuType;
export {};
