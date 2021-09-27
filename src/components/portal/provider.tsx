import React, { useState, Fragment } from 'react'
import { PortalsContext } from './use-portals'
import { Portals } from './portals'
import { useForceUpdate } from '../../utils'

let id = 1
export let portals = {}

export function PortalsProvider({ children, ...props }) {
  // const [portals, setPortals] = useState({})
  const [updated, update] = useForceUpdate()

  function removePortal(index) {
    delete portals[index]
    update()
  }

  function addPortal(index, value) {
    if (!index) {
      index = id++
    }
    const render = (
      <Fragment key={`portal-${index}`}>
        {value}
      </Fragment>
    )
    portals[index] = render
    update()
    return index
  }

  return (
    <PortalsContext.Provider
      value={{ portals, addPortal, removePortal, update }}
      {...props}
    >
      {children}
      <Portals />
    </PortalsContext.Provider>
  )
}