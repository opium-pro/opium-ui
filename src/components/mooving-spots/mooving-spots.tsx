import React from 'react'
import {Fit} from 'themeor'
import {Spot} from './spot'

export function MoovingSpots({children, ...rest}) {
  const altSpotSet = window.location.pathname.includes('banking-software')

  return(
    <Fit {...rest}>
      <Fit clip cover="parent">
        <Spot reset altSpotSet={altSpotSet}/>
        <Spot reset={false} altSpotSet={altSpotSet}/>
        <Spot reset={false} altSpotSet={altSpotSet}/>
        <Spot reset={false} altSpotSet={altSpotSet}/>
        <Spot reset={false} altSpotSet={altSpotSet}/>
        <Spot reset={false} altSpotSet={altSpotSet}/>
        <Spot reset={false} altSpotSet={altSpotSet}/>
        <Spot reset={false} altSpotSet={altSpotSet}/>
        <Spot reset={false} altSpotSet={altSpotSet}/>
        <Spot reset={false} altSpotSet={altSpotSet}/>
        <Spot reset={false} altSpotSet={altSpotSet}/>
        <Spot reset={false} altSpotSet={altSpotSet}/>
        <Spot reset={false} altSpotSet={altSpotSet}/>
      </Fit>

      <Fit>
        {children}
      </Fit>
    </Fit>
  )
}