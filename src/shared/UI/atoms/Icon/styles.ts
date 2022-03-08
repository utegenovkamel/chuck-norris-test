import styled from 'styled-components'

export const Container = styled.div<{ isPointer?: boolean }>`
  cursor: ${({ isPointer }) => (isPointer ? 'pointer' : 'default')};
`
