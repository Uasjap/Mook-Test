import React, { useState } from 'react'
import Photo from './Photo'
import { useNavigate } from 'react-router-dom'
import {AnimatePresence, motion} from 'framer-motion'
import Login from './Login';

export default function MainPage() {

    const [showLogin, setShowLogin] = useState(false);
    const navigate = useNavigate();
    const handlePhotoClick = (): void => {
        navigate('/upload')
    }
    const handleLogin =(): void => {
        setShowLogin(true);
    }




  return (
    <AnimatePresence>
    <motion.div
     className='mainContainer'
     style={{ maxWidth: '375px' }}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{type: 'tween', duration: 0.5}}>
        <div className='header'>
        <div className='headerName'>OneAI</div>
        <button className='loginbtn' onClick={() => handleLogin()}><div className='btnText'>Sign in</div></button>
      </div>
      <div onClick={() => handlePhotoClick()}><Photo/></div>
      <div onClick={() => handlePhotoClick()}><Photo/></div>
      <div className='footer'>
        <div className='support'>Get help at support@avgen.me</div>
        <div className='copyright'> Copyright © 2024 Mook Ltd. All rights reserved.</div>
      </div>
      {showLogin && (
        <AnimatePresence>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'tween', duration: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(20px)',
          zIndex: 2,
        }}
      >
 <Login onClose={() => setShowLogin(false)} />
      </motion.div>
      </AnimatePresence>
      )}
      </motion.div>
      </AnimatePresence>
  )
}
