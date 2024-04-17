import { Route, Routes, useLocation } from 'react-router-dom'
import './MainPage.css'
import MainPage from './pages/MainPage'
import MainLoggedIn from './pages/MainLoggedIn'
import Login from './pages/Login'
import Upload from './pages/Upload'
import Result from './pages/Result'

import {AnimatePresence} from 'framer-motion'

import { useState } from 'react';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const location = useLocation();

  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/upload' element={<Upload/>}/>
          <Route path='/result' element={<Result/>}/>
          <Route path='/loggedin' element={<MainLoggedIn/>}/>
          {isLoginOpen && <Route path='/login' element={<Login onClose={closeLogin}/>}/>}
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App;

