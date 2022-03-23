import React from 'react'
import { Align, Fit, Box, Font, Line, Gap, Icon, FontProps } from 'themeor'
import { MakeButton } from '../make-button'
import { withTooltip } from '../tooltip'


type Props = React.HTMLAttributes<HTMLElement> & {
  label?: string
  icon?: string
  active?: boolean
  prompt?: string
  row?: boolean
  forwardRef?: any
  img?: string
  activeFill?: string
  fontSize?: string
}

export const Item = withTooltip(({ label, fontSize = 'x2s', activeFill = 'complement', forwardRef, img, active, icon, prompt, row, children, ...rest }: Props) => {
  return (
    <MakeButton forwardRef={forwardRef} offset="0" radius="none" {...rest}>
      <Fit.TryTagless width="100%">
        <Gap.TryTagless hor={row ? "lg" : "sm"} vert="md" right={row && "x2l"}>
          <Align row={row} vert="center">

            <Align hor="center">
              {icon && <Icon
                name={icon}
                fill={active ? activeFill : "base"}
              />}
              {img && <>
                <Box
                width="64px"
                height="64px"
                img={img}
                />
                <Gap size="xs" />
              </>}
            </Align>

            <Gap size={row ? "md" : "x2s"} />
            <Font
              align="center"
              size={fontSize}
              transition
              noselect
              weight={active ? '600' : '500'}
              fill={active ? activeFill : "base"}
            >
              {label}
            </Font>

            {prompt && (<>
              <Gap size="x2s" />
              <Font
                align="center"
                size="x3s"
                noselect
                fill="faint"
              >
                {prompt}
              </Font>
            </>)}

            {children}

          </Align>
        </Gap.TryTagless>
      </Fit.TryTagless>
    </MakeButton>
  )
}, { place: 'right' })