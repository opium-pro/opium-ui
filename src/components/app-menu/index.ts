import { Wrapper, WrapperProps } from './wrapper'
import { Item, ItemProps } from './item'
import { OpiumComponent, DemoProps } from '../../types'
import { icons } from '../../theme/iconList'


export type AppMenuType = typeof Wrapper & OpiumComponent<WrapperProps> & {
  Item: typeof Item
}

export const AppMenu = Wrapper as AppMenuType

AppMenu.Item = Item
AppMenu.Item.displayName = "AppMenu.Item"

AppMenu.displayName = "AppMenu"
AppMenu.description = 'Боковое вертикальное меню'

AppMenu.demoProps = {
  Props: {
    row: ['boolean'],
    gapHor: ['string'],
    gapVert: ['string'],
  },
  'Item Props': {
    _indent: '  ',
    _extends: ['MakeButton', 'withTooltip'],
    label: ['string', 'Demo Item'],
    icon: ['select', '3d-rotate', icons],
    hint: ['string'],
    img: ['string'],
    fill: ['string'],
    href: ['string'],
    fontSize: ['string'],
    active: ['boolean'],
    row: ['boolean'],
    disabled: ['boolean'],
    blank: ['boolean'],
  } as DemoProps<ItemProps>,
}

AppMenu.usage = `<AppMenu{Props}>
  <AppMenu.Item{Item Props}/>
  <AppMenu.Item{Item Props}/>
  <AppMenu.Item{Item Props}/>
  <AppMenu.Item{Item Props}/>
</AppMenu>`