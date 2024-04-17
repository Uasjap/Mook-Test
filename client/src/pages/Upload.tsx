import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

export default function Upload():JSX.Element {

    const navigate = useNavigate()
    const handlemorePhotosClick = (): void => {
        navigate('/result')
    }
    const handleGoBack = (): void => {
        navigate('/')
    }

  return (
    <>
    <AnimatePresence>
    <motion.div 
      className='uploadContainer'
      style={{ maxWidth: '375px' }}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{type: 'tween', duration: 0.5}}>
            <button className='goBack' onClick={() => handleGoBack()}><img className='bracket' src='src\img\leftanglebracket_120651.png' alt='img'/> Go Back</button>
    <div className='imgContainer'>
        <div className='uploadImg img1'></div>
        <div className='uploadImg img2'></div>
    </div>
    <div className='optionContainer'>
        <button onClick={() => handlemorePhotosClick()} className='choosePhoto'>
            <img className='icon' src='\src\img\gallery.png' alt='img' />
            <div className='textPage2'>Choose photo from gallery</div>
        </button>
        <button onClick={() => handlemorePhotosClick()} className='takePhoto'>
            <img className='icon' src='\src\img\camera.png' alt='img' />
            <div className='textPage2'>Take photo with camera</div>
        </button>
    </div>
    </motion.div>
    </AnimatePresence>
    </>
  )
}

