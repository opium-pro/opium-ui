import { ReactNode } from 'react'

export type AppLayoutProps = {
  menu?: any
  header?: any
  footer?: any
  modals?: any
  getContentNode?: any
  fill?: string
  children?: ReactNode
}