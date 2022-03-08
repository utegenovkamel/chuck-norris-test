import { flexbox, FlexboxProps } from 'styled-system'
import styled from 'styled-components'

export const Box = styled.div<FlexboxProps>`
  display: flex;
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.palette.secondary[200]};
  border: 3px solid ${({ theme }) => theme.palette.secondary[100]};
  ${flexbox}
`
