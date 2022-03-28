import { FC } from 'react'
import * as mainMenu from '../index'
import { Font, Align, Fit } from 'themeor'
import { AppMenu } from '../../components'
import { nav, usePath, Path, config } from 'opium-nav'
import { nameToUrl } from './utils'
import { Component } from './component'


export type GroupProps = {
  icon?: string,
  menu?: object[],
  name?: string,
}

export const Group: FC<GroupProps> = ({
  icon,
  menu,
  name,
}) => {
  const { path } = usePath()

  const menuItems = {}
  for (const component of menu) {
    Object.assign(menuItems, component)
  }

  return (
      <Align width="100%" maxWidth="100%" height="100vh" pattern="200px auto" vert="stretch">
        <AppMenu height="100%">
          {Object.keys(menuItems).map((component) => {
            const pathName = `/${nameToUrl(name)}/${nameToUrl(component)}`
            return (
              <AppMenu.Item
                key={component}
                row
                label={component}
                onClick={() => nav.go(pathName)}
                active={path === pathName || path.indexOf(pathName + config.stackSeparator) === 0}
              />
            )
          })}
        </AppMenu>
        <div>
          {Object.keys(menuItems).map((component) => (
            <Path
              key={component}
              parent
              name={`/${nameToUrl(name)}/${nameToUrl(component)}`}
              component={() => <Component name={component} Component={menuItems[component]} />}
            />
          ))}
        </div>
      </Align>
  )
}