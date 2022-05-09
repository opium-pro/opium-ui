import React, { FC } from 'react'
import { Font, Box } from 'themeor'


export interface MarkMatchProps {
  target?: string | string[]
  Wrapper?: any
  children?: string
}


export const MarkMatch: FC<MarkMatchProps> = ({
  children,
  target,
  Wrapper,
}) => {
  if (typeof children !== 'string') { return null as any }
  if (!children && !target) { return null as any }

  if (!target) {
    target = ''
  }

  if (!Wrapper) {
    Wrapper = ({ children }) => (
      <Box.TryTagless fill="warning">
        <Font inline fill="base">
          {children}
        </Font>
      </Box.TryTagless>
    )
  }

  if (!Array.isArray(target)) {
    target = [target]
  }

  return replace(children, target, Wrapper)
}


function replace(children, target, Wrapper) {
  const indexMap = new Map
  for (const text of target) {
    const index = children.toLowerCase().indexOf(text.toLowerCase())
    if (index >= 0) {
      indexMap.set(index, text)
    }
  }
  const index = Math.min(...Array.from(indexMap.keys()))
  const text = indexMap.get(index)

  let firstPart = children.slice(0, index)
  let matchPart = children.slice(index, text?.length + index)
  let lastPart = children.slice(text?.length + index)

  if (!indexMap.size) {
    firstPart = children
    matchPart = undefined
    lastPart = undefined
  } else if (lastPart.length && children.length !== lastPart.length) {
    lastPart = replace(lastPart, target, Wrapper)
  }

  return (<>
    {firstPart}
    {matchPart && <Wrapper>{matchPart}</Wrapper>}
    {lastPart}
  </>)
}