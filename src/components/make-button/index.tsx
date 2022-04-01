import React, { ReactNode } from 'react'
import { FitProps, ReactionContext, Fit, Font, Box, Reaction, Align, AlignProps, FontProps, CommonProps, ReactionProps } from 'themeor'
import { withTooltip, WithTooltipProps } from '../tooltip'
import { OpiumComponent } from '../../types'


export type MakeButtonProps = Omit<ReactionProps, 'children'> & WithTooltipProps & FitProps & CommonProps & {
  offset?: string,
  disabled?: boolean,
  radius?: string,
  fade?: boolean,
  forwardRef?: any,
  fillHover?: string
  fillActive?: string
  fillEffect?: string
  href?: string
  blank?: boolean
  type?: string
  children?: ReactNode | ((r: ReactionContext) => ReactNode)
}

export const MakeButton = withTooltip(({
  children,
  offset = "10px",
  disabled,
  radius = "md",
  type = "button",
  fade,
  forwardRef,
  fillEffect,
  fillHover = fillEffect || "hovereffect",
  fillActive = fillEffect || "faint",
  href,
  blank,
  onClick,
  ...rest
}: MakeButtonProps) => {
  const Tag = href ? 'a' : 'button'

  function handleClick(e) {
    if (onClick && href) {
      e.preventDefault()
      onClick(e)
    }
  }

  return (
    <Reaction
      {...rest}
      onClick={handleClick}
      disabled={disabled}
      button
      tabIndex={0}
    >
      {(rProps, r) => (
        <Fit.TryTagless
          {...rProps}
          style={{
            margin: `-${offset.split(' ').join(' -')}`,
            padding: offset,
          }}
          forwardRef={forwardRef}
        >
          <Tag
            href={href}
            rel={href && blank && "nofollow"}
            target={href && blank && "_blank"}
            type={(!href ? type : undefined) as any}
          >
            {!disabled && (
              <Fit.TryTagless
                width={r.hoverOrFocus ? "100%" : (!fade ? "0" : undefined)}
                height={r.hoverOrFocus ? "100%" : (!fade ? "0" : undefined)}
                stick="top-left"
                top={r.hoverOrFocus ? "0" : (!fade ? "50%" : undefined)}
                left={r.hoverOrFocus ? "0" : (!fade ? "50%" : undefined)}
              >
                <Box
                  radius={r.hoverOrFocus ? radius as any : 'max'}
                  fill={r.active ? fillActive : fillHover}
                  style={{
                    transition: "all 0.2s ease",
                    opacity: fade ? (r.hoverOrFocus ? "1" : "0") : undefined,
                  }}
                />
              </Fit.TryTagless>
            )}
            {typeof children === 'function' ? (
              children(r)
            ) : (
              children
            )}
          </Tag>
        </Fit.TryTagless>
      )}
    </Reaction>
  )
}) as OpiumComponent<MakeButtonProps>


MakeButton.displayName = 'MakeButton'
MakeButton.demoProps = {}