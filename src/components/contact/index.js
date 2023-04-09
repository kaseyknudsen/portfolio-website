import AnimatedLetters from '../animatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timerId)
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_de2nhch',
        'template_7xelwrl',
        refForm.current,
        'IUfrty1FrHYjCCiIv'
      )
      .then(
        (result) => {
          alert('Message Sent!')
          console.log(result.text)
          window.location.reload(false)
        },
        (error) => {
          console.log(error.text)
          alert('Failed to send the message, please try again.')
        }
      )
  }

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
          <p>
            I'm an ambitious junior developer looking for projects to work on! Please contact
            me for more information.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
            <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="user_name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="user_email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Kasey Knudsen
          <br />
          Napa, California
          <br />
          <span>kaseyknudsen@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[38.2029586, -122.3124609]} zoom={8}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[38.2029586, -122.3124609]}>
              <Popup>I live here!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
