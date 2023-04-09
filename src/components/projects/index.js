import './index.scss'
import Loader from 'react-loaders'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../animatedLetters'
import { Link } from 'react-router-dom'

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
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
              volutpat ac tincidunt vitae. Malesuada pellentesque elit eget
              gravida cum sociis natoque penatibus et. Purus in massa tempor nec
              feugiat nisl pretium.
            </p>

            <Link
              to="https://kaseyknudsenjazztheory.vercel.app/"
              className="flat-button"
              target="_blank"
            >
              JAZZ IMPROV WEBSITE
            </Link>
          </div>
          <div style={{ marginTop: '100px' }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
              volutpat ac tincidunt vitae. Malesuada pellentesque elit eget
              gravida cum sociis natoque penatibus et. Purus in massa tempor nec
              feugiat nisl pretium.
            </p>

            <Link
              to="https://danicascustombakes.com/"
              className="flat-button"
              target="_blank"
            >
              DANICA'S CUSTOM BAKES
            </Link>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
