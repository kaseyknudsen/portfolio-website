import './index.scss'
import Loader from 'react-loaders'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../animatedLetters'
import { Link } from 'react-router-dom'
import JazzImprovImage1 from '../../assets/images/jazz-improv-website-image-1.png'
import JazzImprovImage2 from '../../assets/images/jazz-improv-website-image-2.png'
import JazzImprovImage3 from '../../assets/images/jazz-improv-website-image-3.png'
import Danicas1 from '../../assets//images/Danicas1.png'
import Danicas2 from '../../assets/images/Danicas2.png'
import Schim1 from '../../assets/images/Schim1.png'
import Schim2 from '../../assets/images/Schim2.png'

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
          <h1 id="projects-heading">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={20}
            />
          </h1>

          <div>
            <div style={{ marginTop: '3em' }}>
              <h2 className="project-title">Jazz Improv Website</h2>
            </div>
            <div id="jazz-improv-paragraphs">
              <p>
                I built this website as a teaching tool for me, and to help my
                saxophone students to learn improvise. It features a theory page
                that resembles flashcards with questions and answers and an
                instrument-specific ear training page to help students identify
                intervals.
              </p>
              <p>
                This site has been an extremely helpful project for me to hone
                my React and Javascript skills, and has given me the opportunity
                to continuously test the usability in real-life teaching
                scenarios. It is a constant work in progress, and continues to
                improve as I continue to improve as a developer. The site was
                built using React, Bootstrap, CSS, Formik, EmailJS, Logic Pro,
                and is deployed using Vercel.
              </p>
            </div>
            <div className="theory-images-container">
              <img src={JazzImprovImage3} alt="Theory 1" />
              <img src={JazzImprovImage2} alt="Theory 2" />
              <img src={JazzImprovImage1} alt="Theory 3" />
            </div>
            <Link
              to="https://kaseyknudsenjazztheory.vercel.app/"
              className="flat-button"
              target="_blank"
              id="theory-website-button"
            >
              LIVE WEBSITE
            </Link>
          </div>
          <div>
            <div style={{ marginTop: '10em' }}>
              <h2 className="project-title">
                Schimscheimer Family Trio Website
              </h2>
            </div>
            <div className="schim-paragraphs">
              <p>
                This is the official website for "The Schimscheimer Family
                Trio," a band I am a part of. I embarked on this project to
                deepen my understanding of NextJS 13 and Tailwind CSS.
                Additionally, to serve our band's mailing list needs, I
                implemented the SheetDB API, allowing us to use a Google
                spreadsheet as a lightweight backend.
              </p>
              <p style={{ marginTop: '2px' }}>
                The Tech Stack is NextJS 13, chosen for its ease of routing and
                server side rendering capabilities, Javascript, The core
                programming language used for the project, and Tailwind CSS,
                chosen for its ease of use as well as its custom UI
                capabilities. I wanted the site to appear as unique as possible.
              </p>
            </div>
            <div
              className="theory-images-container"
              style={{ marginBottom: '3em' }}
            >
              <img src={Schim1} alt="Home Page" />
              <img src={Schim2} alt="Listen Page" />
            </div>
            <Link
              to="https://schimscheimerfamilytriomusic.com"
              className="flat-button"
              target="_blank"
            >
              LIVE WEBSITE
            </Link>
          </div>
          <div style={{ marginTop: '10em' }}>
            <div style={{ marginTop: '5em' }}>
              <h2 className="project-title">Danica's Custom Bakes</h2>
            </div>
            <div className="project-paragraphs">
              <p>
                Danica's Custom Bakes was founded by Danica Cortez in July of
                2022 in Austin, TX. I started working as an intern on this
                project in January of 2023. It has given me a chance to get my
                feet wet designing UI Components, writing tests and working with
                a team of developers. The tech stack is Next JS, Material UI,
                Cypress, Typescript, Mongo DB, Prisma, Docker, and Postman.
              </p>
            </div>
            <div className="danicas-images-container">
              <img src={Danicas1} alt="Danica's 1" />
              <img src={Danicas2} alt="Danica's 2" />
            </div>
            <Link
              to="https://danicascustombakes.com/"
              className="flat-button"
              target="_blank"
            >
              LIVE WEBSITE
            </Link>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
