import React, { FC } from 'react'
import { Line, Align } from 'themeor'
import { isDefined } from '../../utils'


export interface JoinFieldsProps { }


export const JoinFields: FC<JoinFieldsProps> = ({ children }) => {
  const newChildren = []
  const validChildren = []

  React.Children.forEach(children, (child) => {
    if (isDefined(child)) {
      validChildren.push(child)
    }
  })

  validChildren.forEach((child: any, index) => {
    if (!child) { return }
    const Component = child.type
    const props = child.props
    const isFirst = index === 0
    const isLast = index + 1 === validChildren.length
    const newProps = { ...props }
    if (!isLast) {
      newProps.radiusRight = 'none'
    }
    if (!isFirst) {
      newProps.radiusLeft = 'none'
    }
    newChildren.push(<Component key={index} {...newProps} />)
    if (!isLast) {
      newChildren.push(<Line key={`separator-${index}`} vert fill="faint" />)
    }
  })

  const pattern = newChildren.map((val, index) => {
    if (index % 2 === 0) {
      return '1fr'
    }
    return '1px'
  })

  return (
    <Align pattern={pattern.join(' ')} vert="stretch">
      {newChildren}
    </Align>
  )
}
