import { ThemeProvider } from 'styled-components'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import GlobalStyles from 'styles/global'
import * as theme from 'styles/tokens'
import { PageRoutes } from "pages";

// TODO: SERVICES, CONSTANTS, CSS THEME CONSTANTS

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <PageRoutes />
        <ToastContainer
          position="bottom-center"
          hideProgressBar={false}
          autoClose={3000}
        />
      </ThemeProvider>
    </>
  )
}

export default App;
