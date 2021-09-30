import React, { useEffect, useState } from 'react'
import { TextInput } from "../text-input"
import { Icon, Gap, Effect, Align, Fit } from 'themeor'
import { useDropdown } from '../dropdown'
import { SelectContext } from './context'
import { SelectType } from './types'
import { Tag } from '../tag'
import { Portal } from '../portal'


export const Select: SelectType = ({
  children,
  onChange,
  multi = false,
  onDisplayValue,
  ...rest
}) => {
  const [displayValues, setDisplayValues] = useState(new Map())
  // const [tagsNode, setTagsNode]: any = useState()
  // const [notFitNode, setNotFitNode]: any = useState()

  const handleDisplayValue = (value) => {
    if (Array.isArray(value)) {
      const newValue = []
      for (const val of value) {
        displayValues.has(val) && newValue.push(displayValues.get(val))
      }
      if (onDisplayValue) {
        return onDisplayValue(newValue)
      }

      return (
        <Fit.TryTagless
          cover="parent"
          maxWidth="100%"
          clip
          // forwardRef={setTagsNode}
        >
          <Align row stretch gapHor="4px">
            {value?.map?.((val, i) => val && <Tag key={i} label={val} fill="base" />)}
          </Align>
        </Fit.TryTagless>
      )

    }
    const newValue = displayValues.get(value)
    return onDisplayValue?.(newValue) || newValue
  }

  useEffect(() => {
    const newValues = new Map()
    React.Children.map(children, ({ props }) => {
      const { value, children, displayValue } = props
      newValues.set(value, displayValue || children)
    })
    setDisplayValues(newValues)
  }, [children])

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

  return (
    <SelectContext.Provider value={{
      multi,
    }}>
      <Fit>
        <TextInput
          {...rest}
          onDisplayValue={handleDisplayValue}
          pasteRight={<SelectIcon />}
          options={children}
          type="select"
        />
      </Fit>
      {/* {multi && <Portal>
        <Fit hidden>
          <Tag
            forwardRef={setNotFitNode}
            fill="base"
            weight="600"
          />
        </Fit>
      </Portal>} */}
    </SelectContext.Provider>
  )
}

function SelectIcon() {
  const { opened } = useDropdown()
  return (
    <Gap right="12px">
      <Effect smooth rotate={opened && '180deg'}>
        <Icon name="chevron_down" />
      </Effect>
    </Gap>
  )
}