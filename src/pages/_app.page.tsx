import NextApp, { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '~/styles/global'

import React from 'react'

const App: React.FC<AppProps> = (props) => {
  return (
    <>
      <ThemeProvider theme={{}}>
        <GlobalStyles />
        <NextApp {...props} />
      </ThemeProvider>
    </>
  )
}

export default App
