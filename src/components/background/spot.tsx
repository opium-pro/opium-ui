import React from 'react'
import { Box, Fit } from 'themeor'
import spot1path from './img/spot1.svg'
import spot2path from './img/spot2.svg'
import purple1path from './img/purple1.svg'
import purple2path from './img/purple2.svg'
import purple3path from './img/purple3.svg'
import random from '../../utils/random'

const size = 930

const spotList = [spot1path, spot2path]
const spotListPurple = [purple1path, purple2path, purple3path]
const stickList = ['left', 'right']
const shiftList = [-size / 3, -size / 3, -size / 3, -size / 4, -size / 2, -size / 2]
const opacityList = [0.1, 0.4, 0.3, 0.2]

export function Spot({ reset, altSpotSet }) {
  const list = altSpotSet ? spotListPurple : spotList;
  const img = list[random(0, list.length - 1)]
  let stick
  const shift = shiftList[random(0, shiftList.length - 1)]
  const opacity = opacityList[random(0, opacityList.length - 1)]

  if (!(Spot as any).lastStick) {
    stick = stickList[random(0, 1)]
  } else {
    stick = stickList.filter((item) => item !== (Spot as any).lastStick)[0]
  }

  (Spot as any).lastStick = stick

  if (!(Spot as any).top || reset) {
    (Spot as any).top = 1
  } else {
    (Spot as any).top += size / [1, 2, 2.5][random(0, 2)]
  }

  return (
    <Fit.TryTagless
      FORCE_TAGLESS
      width={`${size}px`}
      height={`${size}px`}
      left={stick === 'left' && `${shift}px`}
      right={stick === 'right' && `${shift}px`}
      top={(Spot as any).top}
      stick={stick}
    >
      <Box
        img={img}
        style={{opacity}}
      />
    </Fit.TryTagless>
  )
}