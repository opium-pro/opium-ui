import React, {FC} from 'react'
import {Fit} from 'themeor'
import {Spot} from './spot'

export interface IBackground {
  altSpotSet?: boolean
}

export const Background: FC<IBackground> = ({children, altSpotSet, ...rest}) => {
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