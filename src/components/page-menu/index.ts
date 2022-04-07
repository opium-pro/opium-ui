import Wrapper, { Props } from './wrapper'
import { Item, Props as ItemProps } from './item'
import { OpiumComponent, DemoProps } from '../../types'
import { icons } from '../../theme/iconList'

type PageMenuType = typeof Wrapper & OpiumComponent<Props> & {
  Item: typeof Item
}

export const PageMenu = Wrapper as PageMenuType

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
  } as DemoProps<ItemProps>,
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