import React from 'react'
import { Helmet } from 'react-helmet'
import { Animate, AnimateProps } from 'themeor'

type Props = AnimateProps & {
  title?: string
}

export function Page({ title, children, ...rest }: Props) {
  return (
    <Animate onMount="fadeIn" {...rest}>
      <Helmet>
        {title && <title>{title}</title>}
      </Helmet>
      {children}
    </Animate>
  )
}