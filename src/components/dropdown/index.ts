import { Item, ItemProps } from './item.js'
import { Dropdown as MakeDropdown, DropdownProps } from './dropdown.js'
import { DropdownContext, useDropdown } from './context.js'
import { OpiumComponent, DemoProps } from '../../types.js'


export type Dropdown = OpiumComponent<DropdownProps> & typeof MakeDropdown & {
  Item: typeof Item
  Context: typeof DropdownContext
  use: typeof useDropdown
}

export const Dropdown = MakeDropdown as Dropdown

Dropdown.Item = Item
Dropdown.Context = DropdownContext
Dropdown.use = useDropdown

Dropdown.displayName = 'Dropdown'

Dropdown.description = 'Convert anything into a dropdown'

Dropdown.demoProps = {
  Props: {
    opened: ['boolean', undefined],
    withSearch: ['boolean', undefined],
    disabled: ['boolean', undefined],
  },
  'Item Props': {
    _extends: ['MakeButton'],
    _indent: '  ',
    label: ['string', 'Item One'],
    disabled: ['boolean', undefined],
    active: ['boolean', undefined],
  } as any,
}

Dropdown.usage = `<Dropdown{Props}
  element={<Button primary label="Demo dropdown, click me!" />}
>
  <Dropdown.Item{Item Props}/>
  <Dropdown.Item label="Item Two" />
  <Dropdown.Item label="Item Three" />
</Dropdown>
`