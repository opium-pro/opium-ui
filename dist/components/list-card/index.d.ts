import { Wrapper } from './wrapper';
import { Item } from './item';
export declare type ListCardType = typeof Wrapper & {
    Item?: typeof Item;
};
export declare const ListCard: ListCardType;
