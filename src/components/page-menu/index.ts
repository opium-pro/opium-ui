import Wrapper, { Props } from './wrapper.js'
import { Item, Props as ItemProps } from './item.js'
import { OpiumComponent, DemoProps } from '../../types.js'
import { icons } from '../../theme/iconList.js'

export type PageMenu = typeof Wrapper & OpiumComponent<Props> & {
  Item: typeof Item
}

export const PageMenu = Wrapper as PageMenu

PageMenu.Item = Item
PageMenu.Item.displayName = 'PageMenu.Item'
PageMenu.displayName = "PageMenu"

PageMenu.demoProps = {
  'Props': {
    gapHor: ['string', undefined, '32px']
  },
  'Item Props': {
    _extends: ['MakeButton'],
    _indent: '    ',
    label: ['string', 'Demo Label'],
    counter: ['number', 3],
    icon: ['select', undefined, icons],
    active: ['boolean', undefined],
  } as any,
}

PageMenu.usage = `<PageMenu{Props}>
    <PageMenu.Item{Item Props}/>

    <PageMenu.Item
      label="Active Label"
      active
    />

    <PageMenu.Item
      label="Label with counter"
      counter={4}
    />
</PageMenu>`