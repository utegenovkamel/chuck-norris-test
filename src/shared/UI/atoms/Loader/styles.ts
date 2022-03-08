import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { position, PositionProps } from 'styled-system'
import styled, { css } from 'styled-components'

import { LoaderPropsType } from './index'

export const LoaderWrapper = styled.div<LoaderPropsType>`
  ${({ center }) =>
    center &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}
  ${position}
`

export const SpinnerImg = styled(FontAwesomeIcon)`
  animation: loader 1.1s infinite linear;
  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
