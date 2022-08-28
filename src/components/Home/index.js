import { useState } from 'react'
import { Link } from 'react-router-dom'
// import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

import './index.scss'

const Home = () => {
  // const dino = document.getElementById('dino')
  // const cactus = document.getElementById('cactus')

  // function jump() {
  //   if (dino.classList != 'jump') {
  //     dino.classList.add('jump')

  //     setTimeout(function () {
  //       dino.classList.remove('jump')
  //     }, 300)
  //   }
  // }

  // let isAlive = setInterval(function () {
  //   // get current dino Y position
  //   let dinoTop = parseInt(
  //     window.getComputedStyle(dino).getPropertyValue('top')
  //   )

  //   // get current cactus X position
  //   let cactusLeft = parseInt(
  //     window.getComputedStyle(cactus).getPropertyValue('left')
  //   )

  //   // detect collision
  //   if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
  //     // collision
  //     alert('Game Over!')
  //   }
  // }, 10)

  // document.addEventListener('keydown', function (event) {
  //   console.log('jump')
  //   jump()
  // })
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['y', 'e', 'a', 'r', 'g', 'u', 'n']
  const jobArray = [
    's',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'e',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
  ]

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m&nbsp;</span>

            <AnimatedLetters
              className="nameAnimatedLetters"
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              className="jobAnimatedLetters"
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Data Engineer | Full Stack Developer </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        {/* <div className="game">
          <div id="dino"></div>
          <div id="cactus"></div>
        </div> */}
      </div>
    </>
  )
}

export default Home
