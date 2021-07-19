import { Wrapper } from './wrapper';
import { Item } from './item';
export declare type SideMenuType = typeof Wrapper & {
    Item?: typeof Item;
};
export declare const SideMenu: SideMenuType;
