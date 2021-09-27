import React, { useState, Fragment } from 'react'
import { PortalsContext } from './use-portals'
import { Portals } from './portals'

let id = 1

export function PortalsProvider({ children, ...props }) {
  const [portals, setPortals] = useState({})

  function removePortal(index) {
    const newPortals = {...portals}
    delete portals[index]
    setPortals(newPortals)
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
    const newPortals = {...portals, [index]: render}
    setPortals(newPortals)
    return index
  }

  return (
    <PortalsContext.Provider
      value={{ portals, addPortal, removePortal }}
      {...props}
    >
      {children}
      <Portals />
    </PortalsContext.Provider>
  )
}