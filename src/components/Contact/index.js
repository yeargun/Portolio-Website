import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_z1zuf8w',
        'template_tgmzj9h',
        refForm.current,
        'HhZhZe-TEl0fItohh'
      )
      .then(() => {
        alert('Message sent successfully')
      })
      .catch((err) => {
        alert('Failed to send message')
        console.log(err)
      })
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
            I'm interested in data engineer | full stack developer positions.
            Though I'm always up to work at challenging projects with good
            teammates.
          </p>
        </div>

        <div className="contact-form">
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input placeholder="Name" type="text" name="name" required />
              </li>
              <li className="half">
                <input placeholder="Email" type="email" name="email" required />
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
        <div className="map-wrap">
          <iframe
            className="map"
            style={{ width: '100%', height: '100%' }}
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=683&amp;height=479&amp;hl=en&amp;q=%20Ankara+(Home)&amp;t=&amp;z=5&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          {/* <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=5795a55df206629539ca25cd73e030e42df99fd8'></script> */}
        </div>
      </div>
    </>
  )
}

export default Contact
