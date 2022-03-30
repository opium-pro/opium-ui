import { useMemo, useState } from 'react'
import * as mainMenu from '../index'
import * as design from '../design'
import * as logic from '../logic'
import { AppLayout, AppMenu, IconButton, Search, MakeButton, MarkMatch, Hotkey, hotkeys } from '../../components'
import { nav, Path, usePath, config } from 'opium-nav'
import { Component } from './component'
import { Align, Line, Gap, Font, Fit, Icon, Box } from 'themeor'
import filter from 'opium-filter'
import { Footer } from './footer'


export function App() {
  const [search, setSearch] = useState()
  const { path } = usePath()
  const group = path.split('/')[1]
  const submenu = {}
  for (const item of mainMenu[group]?.menu || []) {
    Object.assign(submenu, item)
  }

  const allItems = []
  for (const group in mainMenu) {
    for (const item of mainMenu[group]?.menu || []) {
      for (const name in item) {
        allItems.push({ label: name, path: `/${group}/${name}`, hint: item[name].description })
      }
    }
  }

  const filteredItems = filter(allItems, search, { deep: true })

  hotkeys('/', (e) => {
    e.preventDefault()
    document.getElementById('search').querySelector('input').focus()
  })

  return (
    <AppLayout
      footer={(<Footer />)}
      menu={(
        <Line.TryTagless right="md" fill="faintDown">
          <Align minWidth="300px" maxHeight="100vh">
            <Gap>
              <Gap size="20px" />
              <Align hor="center">

                <MakeButton onClick={() => {
                  nav.go('/')
                  setSearch(undefined)
                }} vert="center" row>
                  <Box fill="warning" radius="max">
                    <Gap size="10px">
                      <Icon size="40px" name="opium-pro" />
                    </Gap>
                  </Box>
                  <Gap size="8px" />
                  <Align>
                    <Font weight="800" size="xl">opium.pro</Font>
                    <Gap size="8px" />
                    <Font fill="faint">TypeScript stuff</Font>
                  </Align>
                </MakeButton>

              </Align>
              <Gap size="30px" />
              <Search
                id="search"
                name="search"
                label={(<Align gapHor="4px" vert="center" row>Search<Hotkey trigger="/" /></Align>) as any}
                value={search}
                onChange={(val) => setSearch(val)}
              />
            </Gap>
            <Line fill="faintDown" />
            <Fit.TryTagless scroll>
              {search ? filteredItems.map(({ label, hint, path }, index) => (
                <MenuItem
                  row
                  key={index}
                  hint={(
                    <MarkMatch target={search}>{hint}</MarkMatch>
                  )}
                  label={(
                    <MarkMatch target={search}>{label}</MarkMatch>
                  )}
                  path={path}
                />
              )) : (
                <Align row stretch vert="stretch">
                  <AppMenu pattern={!group && "1fr 1fr"}>
                    <Align.Span col={2}>
                      <Gap size="20px" />
                      <Font align="center" fill="faintDown" size="x2s">Design</Font>
                      <Gap />
                    </Align.Span>

                    {Object.keys(design).map((name) => (
                      <MenuItem
                        key={name}
                        label={name}
                        path={`/${name}`}
                        icon={mainMenu[name].icon}
                      />
                    ))}

                    <Align.Span col={2}>
                      <Gap />
                      <Line fill="faint" />
                      <Gap size="20px" />
                      <Font align="center" fill="faintDown" size="x2s">Logic</Font>
                      <Gap />
                    </Align.Span>

                    {Object.keys(logic).map((name) => (
                      <MenuItem
                        key={name}
                        label={name}
                        path={`/${name}`}
                        icon={mainMenu[name].icon}
                      />
                    ))}

                    <Gap />
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
              )}

              {search && (<>
                <Gap.TryTagless height="200px">
                  <Align hor="center" vert="center">
                    <IconButton
                      icon="cross"
                      label="clear filter"
                      critic
                      onClick={() => setSearch(undefined)}
                    />
                  </Align>
                </Gap.TryTagless>
              </>)}
            </Fit.TryTagless>
          </Align>
        </Line.TryTagless>
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

  return (
    <AppMenu.Item
      onClick={() => nav.go(activePath)}
      active={isActive}
      {...rest}
    />
  )
}