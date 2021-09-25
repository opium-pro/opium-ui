import React from 'react'
import { Align, Fit, Box, Font, Line, Gap, Icon, Reaction } from 'themeor'
import { MakeButton } from '../make-button'

type Props = React.HTMLAttributes<HTMLElement> & {
  label?: string,
  icon?: string,
  active?: boolean,
  prompt?: string,
  row?: boolean,
}

export function Item({ label, active, icon, prompt, row, ...rest }: Props) {
  return (
    <MakeButton offset="0" radius="none" {...rest}>
      <Fit.TryTagless width="100%">
        <Gap.TryTagless hor={row ? "lg" : "sm"} vert="md" right={row && "x2l"}>
          <Align row={row} vert="center">

            <Align hor="center">
              <Icon
                name={icon}
                fill={active ? "complement" : "base"}
              />
            </Align>

            <Gap size={row ? "md" : "x2s"} />
            <Font
              align="center"
              size="x2s"
              noselect
              fill={active ? "complement" : "base"}
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

          </Align>
        </Gap.TryTagless>
      </Fit.TryTagless>
    </MakeButton>
  )
}