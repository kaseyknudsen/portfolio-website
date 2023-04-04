import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../../../animatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'
import {
  faBootstrap,
  faCss3,
  faGit,
  faHtml5,
  faJs,
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
          volutpat ac tincidunt vitae. Malesuada pellentesque elit eget gravida
          cum sociis natoque penatibus et. Purus in massa tempor nec feugiat
          nisl pretium.
        </p>
        <p>
          Egestas congue quisque egestas diam in arcu cursus. Egestas sed tempus
          urna et pharetra pharetra massa massa ultricies. Morbi tincidunt augue
          interdum velit euismod in pellentesque. Lobortis mattis aliquam
          faucibus purus in massa tempor nec. Facilisis volutpat est velit
          egestas dui id ornare arcu. Sagittis purus sit amet volutpat consequat
          mauris nunc congue nisi. Pharetra convallis posuere morbi leo urna
          molestie at elementum eu. Faucibus vitae aliquet nec ullamcorper sit
          amet risus. Massa vitae tortor condimentum lacinia quis vel eros donec
          ac.
        </p>
        <p>
          Urna condimentum mattis pellentesque id nibh tortor id aliquet. Amet
          nisl suscipit adipiscing bibendum est ultricies integer quis.
          Ridiculus mus mauris vitae ultricies. Accumsan sit amet nulla facilisi
          morbi tempus iaculis urna. Donec massa sapien faucibus et molestie ac
          feugiat.
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
    <Loader type="pacman"/>
    </>
  )
}

export default About
