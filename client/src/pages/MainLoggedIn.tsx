import React from 'react'
import Photo from './Photo'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion';

export default function MainLoggedIn() {

    const navigate = useNavigate();
    const handlePhotoClick = (): void => {
        navigate('/upload')
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
      <div className='headerTwo'>
        <div className='headerNameTwo'>OneAI</div>
      </div>
      <div onClick={() => handlePhotoClick()}><Photo/></div>
      <div onClick={() => handlePhotoClick()}><Photo/></div>
      <div className='footer'>
      <div className='support'>Get help at support@avgen.me</div>
        <div className='copyright'> Copyright © 2024 Mook Ltd. All rights reserved.</div>
      </div>
      </motion.div>
      </AnimatePresence>
  )
}
