import React, { FC, Fragment } from 'react'
import { Line, Align } from 'themeor'


export interface JoinFieldsProps { }


export const JoinFields: FC<JoinFieldsProps> = ({ children }) => {
  const newChildren = []

  React.Children.forEach(children, (child: any, index) => {
    const Component = child.type
    const props = child.props
    const isFirst = index === 0
    const isLast = index + 1 === React.Children.count(children)
    const newProps = { ...props, stretch: true }
    if (!isLast) {
      newProps.radiusRight = 'none'
    }
    if (!isFirst) {
      newProps.radiusLeft = 'none'
    }
    newChildren.push(
      <Fragment key={index}>
        <Component {...newProps} />
        {!isLast && <Line vert fill="faint" />}
      </Fragment>
    )
  })

  return (
    <Align row vert="stretch">
      {newChildren}
    </Align>
  )
}
