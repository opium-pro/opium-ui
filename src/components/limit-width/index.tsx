import { Fit, Gap } from 'themeor'

export type Props = React.HTMLAttributes<HTMLElement> & {
  gutter?: any,
}

export function LimitWidth ({ children, gutter = 'x3l', ...rest }: Props) {
  return (
    <Gap style={{
      padding: '0 60px',
    }} {...rest}>
      <Fit
        minWidth="860px"
        maxWidth="1200px"
        style={{ margin: "0 auto" }}
      >
        {children}
      </Fit>
    </Gap>
  )
}