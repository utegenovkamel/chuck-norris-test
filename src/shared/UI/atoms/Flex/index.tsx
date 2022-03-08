import { flexbox, FlexboxProps, space, SpaceProps } from 'styled-system'
import styled from 'styled-components'

export const Flex = styled.div<FlexboxProps & SpaceProps>`
  display: flex;
  width: 100%;
  ${flexbox};
  ${space};
`
