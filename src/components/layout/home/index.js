import './index.scss'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../../animatedLetters'
import { useEffect, useState } from 'react'
import KaseyImg from '../../../assets/images/KaseyK.png'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ', 'K', 'a', 's', 'e', 'y', '.']
  const jobArray = [
    'w',
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

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    console.log('running again!')
    return () => {
      clearTimeout(timerId)
    }
  })

  return (
    <>
      <img src={KaseyImg} className="kaseyImg" alt="Kasey Knudsen" />
      <div
        className="container home-page"
        // style={{
        //   backgroundImage: `url(${KaseyImg})`,
        //   backgroundSize: 'cover',
        //   opacity:'0.2'
        // }}
      >
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
          <h2>Frontend Developer / Javascript / React</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
