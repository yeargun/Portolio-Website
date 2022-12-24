import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";

import "./index.scss";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = ["y", "e", "a", "r", "g", "u", "n"];
  const jobArray = [
    "s",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    " ",
    "e",
    "n",
    "g",
    "i",
    "n",
    "e",
    "e",
    "r",
  ];

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
          <h2>React | Node.js | Spring Boot</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
