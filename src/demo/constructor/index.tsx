import { useMemo } from 'react'
import * as mainMenu from '../index'
import { AppLayout, AppMenu, ActionButton } from '../../components'
import { nav, Path, usePath } from 'opium-nav'
import { Group } from './group'
import { nameToUrl } from './utils'


export function App() {
  return (
    <AppLayout menu={(
      <AppMenu>
        {Object.keys(mainMenu).map((name) => <MenuItem key={name} name={name} />)}
      </AppMenu>
    )}>
      {Object.keys(mainMenu).map((name) => (
        <Path
          key={name}
          parent
          name={`/${nameToUrl(name)}`}
          component={() => <Group name={name} {...mainMenu[name]} />}
        />
      ))}
    </AppLayout>
  )
}

function MenuItem({ name }) {
  const { path } = usePath()
  const activePath = `/${nameToUrl(name)}`
  const isActive = path === `/${nameToUrl(name)}`

  return useMemo(() => (
    <AppMenu.Item
      label={mainMenu[name].name || name}
      onClick={() => nav.go(activePath)}
      active={isActive}
    />
  ), [isActive])
}