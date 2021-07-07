import React from 'react'
import { Helmet } from 'react-helmet'

type Props = any & React.AllHTMLAttributes<HTMLElement> & {
  title?: string
}

export function Page ({ title, children }: Props) {
  return (<>
    <Helmet>
      {title && <title>{title}</title>}
    </Helmet>
    {children}
  </>)
}