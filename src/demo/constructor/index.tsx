import { useMemo } from 'react'
import * as mainMenu from '../index'
import { AppLayout, AppMenu, TextInput, Form, MakeButton, TextArea } from '../../components'
import { nav, Path, usePath, config } from 'opium-nav'
import { Component } from './component'
import { Align, Line, Gap, Font, Fit } from 'themeor'


export function App() {
  const { path } = usePath()
  const group = path.split('/')[1]
  const submenu = {}
  for (const item of mainMenu[group]?.menu || []) {
    Object.assign(submenu, item)
  }

  return (
    <AppLayout menu={(
      <Align minWidth="300px" maxHeight="100vh">
        <Gap>
          <Gap size="20px" />
          <Align hor="center">
            <MakeButton onClick={() => nav.go('/')}>
              <Font weight="900" size="xl">Opium UI</Font>
            </MakeButton>
          </Align>
          <Gap size="30px" />
          <Form>
            <TextInput name="search" type="search" placeholder="Search" />
            <Gap />
            <TextInput name="search" label="Search" placeholder="Search" />
            <Gap />
            <TextArea name="search" label="Search" placeholder="Search" />
          </Form>
        </Gap>
        <Line fill="faintDown" />
        <Fit.TryTagless scroll>
        <Align row stretch vert="stretch">
          <AppMenu pattern={!group && "1fr 1fr"}>
            {Object.keys(mainMenu).map((name) => (
              <MenuItem
                key={name}
                label={name}
                path={`/${name}`}
                icon={mainMenu[name].icon}
              />
            ))}
          </AppMenu>
          {group && (<>
            <Line.TryTagless left="md" fill="faintDown">
              <AppMenu width="200px">
                {Object.keys(submenu).map((name) => (
                  <MenuItem
                    row
                    key={name}
                    label={name}
                    path={`/${group}/${name}`}
                  />
                ))}
              </AppMenu>
            </Line.TryTagless>
          </>)}
        </Align>
        </Fit.TryTagless>
      </Align>
    )}>
      <Path
        parent
        name={`/:group/:component`}
        component={Component}
      />
    </AppLayout>
  )
}

function MenuItem({ path: activePath, ...rest }) {
  const { path } = usePath()
  const isActive = path === activePath || path.indexOf(activePath + config.stackSeparator) === 0

  return useMemo(() => (
    <AppMenu.Item
      onClick={() => nav.go(activePath)}
      active={isActive}
      {...rest}
    />
  ), [isActive])
}