import { Wrapper, WrapperProps } from './wrapper.js'
import { Item, ItemProps } from './item.js'
import { OpiumComponent, DemoProps } from '../../types.js'
import { icons } from '../../theme/iconList.js'


export type TopMenu = typeof Wrapper & OpiumComponent<WrapperProps> & {
  Item: typeof Item
}

export const TopMenu = Wrapper as TopMenu

TopMenu.Item = Item
TopMenu.Item.displayName = "TopMenu.Item"
TopMenu.displayName = "TopMenu"
TopMenu.description = "Better place this menu at the very top of the page"

TopMenu.demoProps = {
  'Item Props': {
    _extends: ['MakeButton'],
    _indent: '  ',
    label: ['string', 'Demo Item'],
    icon: ['select', undefined, icons],
    fill: ['string'],
    active: ['boolean'],
  } as any
}

TopMenu.usage = `<TopMenu>
  <TopMenu.Item{Item Props}/>
  <TopMenu.Item label="Second Item" />
  <TopMenu.Item label="Third Item" />
</TopMenu>
`