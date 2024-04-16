import { Route, Routes, useLocation } from 'react-router-dom'
import './MainPage.css'
import MainPage from './pages/MainPage'
import MainLoggedIn from './pages/MainLoggedIn'
import Login from './pages/Login'
import Upload from './pages/Upload'
import Result from './pages/Result'

import {AnimatePresence} from 'framer-motion'

function App() {
  const location = useLocation();
  return (
    <>
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/loggedin' element={<MainLoggedIn/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </AnimatePresence>
    </>
  )
}

export default App

