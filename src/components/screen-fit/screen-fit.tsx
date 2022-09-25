import React, { useEffect, useRef, useState } from 'react'
import { ScreenFitContext } from './context.js'
import { SCREEN_FIT, Screen } from './constants.js'


export function ScreenFit({ children, ...rest }) {
  const [currentScreen, setCurrentScreen]: [Screen, any] = useState()
  const node: any = useRef()

  useEffect(() => {
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  function resize() {
    let result: Screen
    const width = node?.current?.offsetWidth
    for (const screen of SCREEN_FIT) {
      if (width >= screen.start) {
        result = screen
      }
      if (width > window.innerWidth) {
        setCurrentScreen({ ...screen })
      }
    }
    result.currentWidth = width
    document.getElementsByTagName('html')[0].style.fontSize = result.oneRem
    setCurrentScreen({ ...result })
  }

  return (
    <ScreenFitContext.Provider value={{ ...currentScreen }}>
      <div ref={n => node.current = n} style={{ maxWidth: '100%' }} {...rest}>
        {children}
      </div>
    </ScreenFitContext.Provider>
  )
}