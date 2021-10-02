import React, { useEffect, useState } from 'react'
import { TextInput } from "../text-input"
import { Icon, Gap, Effect, Align, Fit } from 'themeor'
import { useDropdown } from '../dropdown'
import { SelectContext } from './context'
import { SelectType } from './types'
import { Tag } from '../tag'


export const Select: SelectType = ({
  children,
  onChange,
  multi = false,
  onDisplayValue,
  ...rest
}) => {
  const [displayValues, setDisplayValues] = useState(new Map())
  const [newChildren, setNewChildren]: any = useState(new Map(children))
  // const [tagsNode, setTagsNode]: any = useState()
  // const [notFitNode, setNotFitNode]: any = useState()

  const handleDisplayValue = (value) => {
    if (Array.isArray(value)) {
      let newValue = []
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
            {newValue?.map?.((val, i) => val &&
              <Tag nowrap key={i} label={val} fill="base" weight="600" />
            )}
          </Align>
        </Fit.TryTagless>
      )

    }
    const newValue = displayValues.get(value)
    return onDisplayValue?.(newValue) || newValue
  }

  useEffect(() => {
    const newValues = new Map()
    const newChildren = new Map()
    React.Children.map(children, (child) => {
      const { value, children, displayValue, label } = child.props
      newValues.set(value, displayValue || label || children)
      newChildren.set(child, displayValue || label || value)
    })
    if (!displayValues.size) {
      setDisplayValues(newValues)
    }
    setNewChildren(newChildren)
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
          insertRight={<SelectIcon />}
          options={newChildren}
          type="select"
        />
      </Fit>
      {/* {multi &&
        <Fit hidden>
          <Tag
            forwardRef={setNotFitNode}
            fill="base"
            weight="600"
          />
        </Fit>
      } */}
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