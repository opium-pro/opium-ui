import React, { FC } from 'react'
import { Align, Fit, Box, Font, Line, Gap, Icon, FontProps } from 'themeor'
import { MakeButton, MakeButtonProps } from '../make-button'
import { withTooltip, WithTooltipProps } from '../tooltip'


type Props = WithTooltipProps & MakeButtonProps & {
  label?: string
  icon?: string
  active?: boolean
  hint?: string
  row?: boolean
  forwardRef?: any
  img?: string
  activeFill?: string
  fontSize?: string
  disabled?: boolean
}

export const Item: FC<Props> = withTooltip(({
  label,
  disabled,
  fontSize = 'x2s',
  activeFill = 'accent',
  forwardRef,
  img,
  active,
  icon,
  hint,
  row,
  children,
  ...rest }) => {
  return (
    <MakeButton
      forwardRef={forwardRef}
      offset="0"
      radius="none"
      disabled={disabled}
      {...rest}
    >
      <Fit.TryTagless width="100%">
        <Gap.TryTagless hor={row ? "lg" : "sm"} vert="md" right={row && "x2l"}>
          <Align row={row} vert="center">

            <Align hor="center">
              {icon &&
                <Icon
                  name={icon}
                  fill={active ? activeFill : disabled ? "faintDown" : "baseDown"}
                />
              }
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
              align={row ? "left" : "center"}
              size={fontSize}
              transition
              noselect
              weight={active ? '600' : '500'}
              fill={active ? activeFill : disabled ? "faintDown" : "baseDown"}
            >
              {label}
              {hint && (<>
                <Gap size="x2s" />
                <Font
                  align={row ? "left" : "center"}
                  size="x3s"
                  noselect
                  weight="400"
                  fill="faintDown"
                >
                  {hint}
                </Font>
              </>)}
            </Font>

            {children}

          </Align>
        </Gap.TryTagless>
      </Fit.TryTagless>
    </MakeButton>
  )
}, { place: 'right' })