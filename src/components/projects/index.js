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
              idx={20}
            />
          </h1>

          <div>
            <div style={{ marginTop: '5em' }}>
              <h2>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={[
                    'J',
                    'a',
                    'z',
                    'z',
                    ' ',
                    'I',
                    'm',
                    'p',
                    'r',
                    'o',
                    'v',
                    ' ',
                    'W',
                    'e',
                    'b',
                    's',
                    'i',
                    't',
                    'e',
                  ]}
                  idx={15}
                />
              </h2>
            </div>
            <p>
              I built this website as a teaching tool for me and to help my
              saxophone students to learn improvisation. It features a theory
              page that resembles flashcards with questions and answers and an
              instrument-specific ear training page to help students identify
              intervals.
            </p>
            <p>
              This site has been an extremely helpful project for me to hone my
              React and Javascript skills, and has given me the opportunity to
              continuously test the usability in real-life teaching scenarios.
              It is a constant work in progress, and has improved as I have
              improved as a developer. The site was built using React,
              Bootstrap, CSS, Formik, EmailJS, Logic Pro, and is deployed using
              Vercel.
            </p>
            <div className="theory-images-container">
              <img src={JazzImprovImage3} alt="Theory 1" />
              <img src={JazzImprovImage2} alt="Theory 1" />
              <img src={JazzImprovImage1} alt="Theory 1" />
            </div>
            <Link
              to="https://kaseyknudsenjazztheory.vercel.app/"
              className="flat-button"
              target="_blank"
            >
              LIVE WEBSITE
            </Link>
          </div>
          <div style={{ marginTop: '100px' }}>
            <div style={{ marginTop: '5em' }}>
              <h2>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={[
                    'D',
                    'a',
                    'n',
                    'i',
                    'c',
                    'a',
                    "'",
                    's',
                    ' ',
                    'C',
                    'u',
                    's',
                    't',
                    'o',
                    'm',
                    ' ',
                    'B',
                    'a',
                    'k',
                    'e',
                    's',
                  ]}
                  idx={15}
                />
              </h2>
            </div>
            <p>
              Danica's Custom Bakes was founded by Danica Cortez on July 2022 in
              Austin, TX. I started working as an intern on this project in
              January of 2023. It has given me a chance to get my feet wet
              designing UI Components, writing tests and working with a team of
              developers. It has given me experience with Next JS, Material UI,
              Cypress, Typescript, Mongo DB, Prisma, Docker, and Postman.
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
