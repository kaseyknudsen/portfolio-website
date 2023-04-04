import AnimatedLetters from '../animatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timerId)
    }
  }, [])
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
          volutpat ac tincidunt vitae. Malesuada pellentesque elit eget gravida
          cum sociis natoque penatibus et. Purus in massa tempor nec feugiat
          nisl pretium.</p>
          <div>
            
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
