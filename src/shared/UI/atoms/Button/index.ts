import { layout, LayoutProps, space, SpaceProps } from 'styled-system'
import styled from 'styled-components'

export const Button = styled.button<LayoutProps & SpaceProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 160px;
  min-height: 44px;
  text-decoration: none;
  line-height: 1.5rem;
  outline: none;
  font-weight: normal;
  font-size: 14px;
  border: none;
  padding: 0 0.5rem;
  cursor: pointer;
  transition: all 0.5s ease;
  color: ${({ theme }) => theme.palette.default};
  background: ${({ theme }) => theme.palette.primary};
  transition: box-shadow 0.25s ease-out, color 0.25s ease-out;
  ${layout}
  ${space}
`
