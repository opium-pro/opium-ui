import React, { FC } from 'react'
import { Align, Fit, Box, Font, Line, Gap, Icon, FontProps } from 'themeor'
import { MakeButton, MakeButtonProps } from '../make-button'
import { withTooltip, WithTooltipProps } from '../tooltip'


type Props = WithTooltipProps & MakeButtonProps & {
  label?: any
  icon?: string
  active?: boolean
  hint?: any
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
      <Gap.TryTagless hor={row ? "lg" : "sm"} vert="md" right={row && "x2l"}>
        <Align row={row} vert="center">
          {(icon || img) && (<>
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
          </>)}

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
    </MakeButton>
  )
}, { place: 'right' })