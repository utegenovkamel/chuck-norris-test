import React from 'react'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { PositionProps } from 'styled-system'

import { theme } from 'shared/theme'

import { LoaderWrapper, SpinnerImg } from './styles'

export type LoaderPropsType = {
  center?: boolean
  size?: SizeProp
  color?: string
} & PositionProps

export const Loader = ({
  center,
  color = theme.palette.primary,
  size = '2x',
  ...rest
}: LoaderPropsType) => {
  return (
    <LoaderWrapper center={center} {...rest}>
      <SpinnerImg icon={faCircleNotch} color={color} size={size} />
    </LoaderWrapper>
  )
}
