import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'

export default function Result():JSX.Element {

  const navigate = useNavigate();

  const handleMore =(): void => {
    navigate('/loggedin')
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
            <img className='resultPhoto' src='./src/img/s-l1200.jpg' alt='img'/>
            <button className='save'>Save</button>
            <button className='more' onClick={() => handleMore()}>More pics</button>
        </motion.div>
        </AnimatePresence>
    </>
  )
}
