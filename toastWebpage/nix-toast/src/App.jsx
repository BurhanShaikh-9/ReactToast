
import React from 'react'
import './assets/styles/style.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './webPage/layout'
import { ROUTES } from './utils/services'
import './assets/styles/styleOutput.css'
import Installation from './webPage/page/gettingStarted/Installation'
import useTheme from './globalStore/theme'
import Configuration from './webPage/page/gettingStarted/configuration'
import Introduction from './webPage/page/gettingStarted/Introduction'

function App() {

  const { theme } = useTheme()


  return (
    <React.Fragment>
      <div className={theme}>
        <Routes>
          <Route element={<Layout/>}>
            <Route element={<Introduction/>} path={ROUTES.HOME} />
            <Route element={<Installation/>} path={ROUTES.INSTALL} />
            <Route element={<Configuration/>} path={ROUTES.CONFIGURE} />
          </Route>
        </Routes>

      </div>
    </React.Fragment>
  )
}

export default App
