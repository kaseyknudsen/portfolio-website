import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../../../animatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'
import {
  faBootstrap,
  faCss3,
  faGit,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
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
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>

          <p>
            Hello! I am a front-end web developer focused on Javascript and
            React, and i'm continuously diving into other technologies and frameworks
            that catch my interest. I love building pages that are fast, responsive,
            easy to use, and create enjoyable interactions and experiences for every
            user.
          </p>
          <p>
            I've spent the past 20 years as a professional musician, and I'm
            fascinated by the similar traits that programming and music share.
            Constant learning is a key concept in both disciplines as the
            variety of tools are endless and ever-changing. Practice,
            repetition, and resilience are vital to both music and programming
            in order to assimilate complex concepts, and "speak" 
            them fluently and creatively.
          </p>
          <p>
            I discovered coding late in life, but it's gifted me with a whole
            new passion that I feel grateful for every day! I am excited to
            continue my journey as a web developer. Let's
            connect!

          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faBootstrap} color="#7A43B6" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGit} color="#EC4V28" />
            </div>
            <div className="face7">
              <FontAwesomeIcon icon={faNodeJs} color="#3c873a" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
