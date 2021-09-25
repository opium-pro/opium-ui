import React, { useState, Fragment, createContext, useContext } from 'react'

const ShadowRenderContext = createContext({})
export const useShadowRender: any = () => useContext(ShadowRenderContext)

let id = 1


export function ShadowRenderProvider(props) {
  const [shadows, setShadows] = useState({})

  function removeShadow(index) {
    const newShadows = { ...shadows }
    delete newShadows[index]
    setShadows(newShadows)
  }

  function bunchRemove(indexes) {
    const newShadows = { ...shadows }
    for (const index of indexes) {
      delete newShadows[index]
    }
    setShadows(newShadows)
  }

  function addShadow(index, value) {
    if (!index) {
      index = id++
      // index = 1
      //   ; (function checkId() {
      //     if (Object.keys(shadows).includes(index.toString())) {
      //       index++
      //       checkId()
      //     }
      //   })()
    }
    const render = (
      <Fragment key={`shadow-${index}`}>
        {value}
      </Fragment>
    )
    const newShadows = { ...shadows, [index]: render }
    setShadows(newShadows)
    return index
  }

  return (
    <ShadowRenderContext.Provider
      value={{ shadows, addShadow, removeShadow, bunchRemove }}
      {...props}
    />
  )
}