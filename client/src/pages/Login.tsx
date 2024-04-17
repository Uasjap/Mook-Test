import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'

interface LoginProps {
    onClose: () => void;
}

export default function Login({onClose}: LoginProps):JSX.Element {

    const navigate = useNavigate();
    const handleLogin = (): void => {
        navigate('/loggedin')
    }

    const handleClose = (): void => {
        const timer = setTimeout(() => {
            onClose();
            clearTimeout(timer);
        }, 0); // Задержка должна соответствовать продолжительности анимации
    }

  return (
    <>
    <AnimatePresence>
    <motion.div 
    className='LoginContainer'
    style={{ maxWidth: '375px' }}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{type: 'tween', duration: 0.5}}>
    <img className='backbtn' src='../img/Red_X.svg.png' onClick={handleClose}/>
    <input 
    className='logInput'
    type='email'
    name='email'
    placeholder='Email'
    />
    <input 
    className='logInput'
    type='password'
    name='paswword'
    placeholder='Password'
    />
    <button className='logbtn' onClick={() => handleLogin()}>Sign in</button>
    </motion.div>
    </AnimatePresence>
    </>
  )
}
