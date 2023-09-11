import './index.scss'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../../animatedLetters'
import { useEffect, useState } from 'react'
import KaseyImg from '../../../assets/images/KaseyK.png'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [wordClass, setWordClass] = useState('word-animate')
  const nameArray = [' ', 'K', 'a', 's', 'e', 'y', '.']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]
  const skillsArray = [
    'Javascript,',
    'React,',
    'Next JS,',
    'Typescript,',
    'NodeJS,',
    'HTML5,',
    'CSS,',
    'SASS,',
    'Bootstrap,',
    'Reactstrap,',
    'Material UI,',
    'Tailwind CSS,',
    'Mongo DB,',
    'Express JS,',
    'Mongoose,',
    'Git,',
    'Github,',
    'Vercel,',
    'Cypress,',
    'Postman',
  ]

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => {
      clearTimeout(timerId)
    }
  })

  return (
    <>
      <div className="container home-page">
      <img src={KaseyImg} className="kaseyImg" alt="Kasey Knudsen" />
        <div className="text-zone">
        
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>

          <div className="skills-container">
            {skillsArray.map((skill, index) => {
              return <span>{skill}</span>
            })}
          </div>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
