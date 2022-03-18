import React, { FC } from 'react'

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary'
}

export interface CardProps {
  width?: string,
  height?: string,
  variant: CardVariant,
}

export const Card:FC<CardProps> = ({width, height, children, variant}) => {
  return (
    <div style={
      {width, 
      border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
      height, 
      background: variant === CardVariant.primary ? 'lightgray' : '',
    }}
    >
      {children}
    </div>
  )
}
