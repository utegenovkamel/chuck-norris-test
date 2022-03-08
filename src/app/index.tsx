import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Routing from 'pages/routes'
import { GlobalStyle } from 'shared/styles'
import { theme } from 'shared/theme'

import { store } from './redux'

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BrowserRouter>
            <Routing />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  )
}

export default App
