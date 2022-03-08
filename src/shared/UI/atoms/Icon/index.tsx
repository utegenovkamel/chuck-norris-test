import React, { MouseEvent } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { theme } from 'shared/theme'

import { Container } from './styles'

type IconsType = 'heart'

type Props = {
  onClick: (e: MouseEvent<HTMLElement>) => void
  type: IconsType
  color?: string
  isPointer?: boolean
}

export const Icon = ({
  type,
  onClick,
  color = theme.palette.default,
  isPointer,
  ...rest
}: Props) => {
  const icons: Record<IconsType, IconProp> = {
    heart: faHeart,
  }

  return (
    <Container onClick={onClick} isPointer={isPointer} {...rest}>
      <FontAwesomeIcon icon={icons[type]} color={color} />
    </Container>
  )
}
