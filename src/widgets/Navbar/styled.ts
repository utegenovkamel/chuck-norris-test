import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
  padding: 1rem 0;
`

export const Nav = styled.nav`
  display: flex;
  max-width: 1140px;
  justify-content: space-around;
  margin: 0 auto;
`

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.default};
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  transition: border-bottom 0.2s ease;
  &.active {
    border-bottom-color: ${({ theme }) => theme.palette.primary};
  }
`
