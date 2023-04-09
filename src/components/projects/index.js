import './index.scss'
import Loader from 'react-loaders'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../animatedLetters'
import { Link } from 'react-router-dom'
import JazzImprovImage1 from '../../assets/images/jazz-improv-website-image-1.png'
import JazzImprovImage2 from '../../assets/images/jazz-improv-website-image-2.png'
import JazzImprovImage3 from '../../assets/images/jazz-improv-website-image-3.png'

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
              I built this website as a teaching tool for me and to help my
              saxophone students learn improvisation and theory. It features a
              theory page that resembles flashcards with questions and answers
              and an instrument-specific ear training page to help students
              identify intervals. The site was built using React, Bootstrap,
              CSS, Formik, EmailJS, Logic Pro, and is deployed using Vercel.
            </p>
            <div className="theory-images-container">
              <img src={JazzImprovImage2} alt="Theory 1" />
              <img src={JazzImprovImage3} alt="Theory 1" />
              <img src={JazzImprovImage1} alt="Theory 1" />
            </div>
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
