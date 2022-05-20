import React, { useEffect, useState } from 'react'
import { TextInput, useTextInput } from "../text-input"
import { Icon, Gap, Align, Fit, useReaction } from 'themeor'
import { Dropdown } from '../dropdown'
import { SelectContext } from './context'
import { SelectType } from './types'
import { Tag } from '../tag'
import { isDefined } from '../../utils'
import { useField } from '../form'
import { isEqual } from 'lodash'


export const Select: SelectType = ({
  children,
  disabled,
  multi = false,
  onDisplayValue,
  onCompare,
  name,
  ...rest
}) => {
  const childProps = React.Children.map(children, (child: any) => child.props)

  const handleDisplayValue = (value) => {
    if (typeof onDisplayValue === 'function') {
      return onDisplayValue(value)
    }

    return multi ? (
      <Fit.TryTagless
        cover="parent"
        maxWidth="100%"
        clip
      >
        <Align row stretch gapHor="4px">
          {value?.map?.((val, i) => {
            const props = childProps.filter((props) => isEqual(props.value, val))[0]
            return <Tag nowrap key={i} label={props.label || props.value} fill="base" weight="600" />
          })}
        </Align>
      </Fit.TryTagless>
    ) : value
  }

  // Вставляем счетчик, если что-то не поместилось
  // useEffect(() => {
  //   if (!tagsNode || !notFitNode) { return }
  //   const tags = tagsNode.children
  //   const parentWidth = tagsNode.offsetWidth
  //   let tagsWidth = 0
  //   const fit = []
  //   let notFit = 0

  //   for (let i = 0; i < tags.length; i++) {
  //     tagsWidth += tags[i].offsetWidth

  //     if (tagsWidth + 60 > parentWidth) {
  //       notFit++
  //     } else {
  //       fit.push(tags[i])
  //     }
  //   }

  //   if (notFit) {
  //     tagsNode.innerHtml = ''
  //     console.log(fit.length);

  //     for (let i; i < fit.length; i++) {
  //       tagsNode.appendChild(fit[i])
  //     }
  //     notFitNode.innerText = `+${notFit}`
  //     tagsNode.appendChild(notFitNode)
  //   } else {
  //     notFitNode.innerText = ''
  //   }
  // })

  // function handleFocus() {
  //   hotkey.setScope('select')
  //   hotkey('space', (e) => {
  //     e.preventDefault()
  //   })
  // }

  // function handleBlur() {
  //   console.log('BLUR');

  //   hotkey.deleteScope('select')
  // }

  return (
    <SelectContext.Provider value={{
      onCompare,
      multi,
      name,
    }}>
      <TextInput
        {...rest}
        name={name}
        disabled={disabled}
        onDisplayValue={handleDisplayValue}
        insertRight={!disabled && <SelectIcon />}
        options={childProps}
        type="select"
      // onFocus={handleFocus}
      // onBlur={handleBlur}
      />
    </SelectContext.Provider>
  )
}


function SelectIcon() {
  const { opened } = Dropdown.use()
  const { hoverOrFocus } = useReaction()
  const { value } = useTextInput()

  if (isDefined(value) && hoverOrFocus) {
    return null
  }

  return (
    <Gap size="12px" rotate={opened && '180deg'}>
      <Icon name="chevron-down" />
    </Gap>
  )
}