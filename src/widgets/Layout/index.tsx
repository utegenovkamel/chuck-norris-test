import React, { FC } from 'react'

import { useSaveLocalStorageDataToStore } from 'processes/saveLocalStorageDataToStore'
import Navbar from 'widgets/Navbar'

import { Container } from './styled'

const Layout: FC = ({ children }) => {
  useSaveLocalStorageDataToStore()

  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  )
}

export default Layout
