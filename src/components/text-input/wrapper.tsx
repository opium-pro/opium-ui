import React from 'react'
import { Gap, Box, Align, Fit, useReaction, Icon } from 'themeor'
import { MakeDropdown } from '../dropdown'
import { useTextInput } from './context'
import { Tooltip } from '../tooltip'
import { Autocomplete } from './autocomplete'
import { isDefined } from '../../utils'
import { IconButton } from '../icon-button'


export const Wrapper = ({ children }) => {
  const {
    disabled,
    options,
    isSelect,
    height,
    error,
    insertLeft,
    insertRight,
    hint,
    value,
    onChange,
    children: parentChildren,
  } = useTextInput()
  const { passProps, focus, hover, hoverOrFocus } = useReaction()
  const context = useTextInput()
  const reaction = useReaction()

  return (
    <MakeDropdown
      // placeOrder={["bottom-stretch", "top-stretch"]}
      items={isSelect ? options : <Autocomplete />}
    >
      <Fit.TryTagless height={height}>
        <Box.TryTagless
          fill={(disabled && "base") || (focus && "base") || (hover && "faint") || "faint-down"}
          radius={context.label ? 'md' : 'max'}
          borderFill={(disabled && "faint") || (focus && "base") || (error && 'critic') || "none"}
          style={{ transition: "all 0.25s ease" }}
          tabIndex={disabled ? -1 : 0}
          {...passProps}
        >
          <Align row vert="stretch">
            {insertLeft && (
              <Align row vert="center">{insertLeft}</Align>
            )}

            <Fit stretch>
              {children}
            </Fit>

            <Align row vert="center">
              {isDefined(value) && hoverOrFocus && (<>
                <IconButton size="xs" name="cross" fill="faint-down" onClick={() => onChange('')} />
                {!(hint || insertRight || parentChildren)
                  && <Gap size="8px" />
                }
              </>)}

              {hint && (<>
                <IconButton size="xs" cursor="help" fill="faint" name="question_circle" />
                <Gap />
                <Tooltip delay={0}>{hint}</Tooltip>
              </>)}

              {insertRight}

              {parentChildren && parentChildren instanceof Function ? (
                parentChildren(context, reaction)
              ) : parentChildren}
            </Align>
          </Align>
        </Box.TryTagless>
      </Fit.TryTagless>
    </MakeDropdown>
  )
}