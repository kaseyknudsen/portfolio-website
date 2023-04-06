import './index.scss'
import Loader from 'react-loaders'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../animatedLetters'

const Projects = () => {
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
      <div className="container projects-page">
        <div className="text-zone">
        <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
        </div>
      </div>
    </>
  )
}

export default Projects
