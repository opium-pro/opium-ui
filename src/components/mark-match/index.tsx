import React, { FC } from 'react'
import { Font, Box } from 'themeor'


export interface MarkMatchProps {
  target?: string
  Wrapper?: any
  children?: string
}


export const MarkMatch: FC<MarkMatchProps> = ({
  children,
  target,
  Wrapper,
}) => {
  if (typeof children !== 'string') { return children as any }
  if (!children && !target) { return children as any }

  if (!target) { 
    target = ''
  }

  if (!Wrapper) {
    Wrapper = ({ children }) => (
      <Box.TryTagless strong fill="faint">
        <Font inline>
          {children}
        </Font>
      </Box.TryTagless>
    )
  }

  const index = children.toLowerCase().indexOf(target.toLowerCase())
  let firstPart = children.slice(0, index)
  let matchPart = children.slice(index, target?.length + index)
  let lastPart = children.slice(target?.length + index)

  if (index === -1) {
    firstPart = children
    matchPart = ''
    lastPart = ''
  }

  return (<>
    {firstPart}
    <Wrapper>{matchPart}</Wrapper>
    {lastPart}
  </>)
}
