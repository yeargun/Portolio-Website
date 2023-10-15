import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";

import "./index.scss";

const hardFontSizer = () => {
  const sizes = Array(6);
  for (let i = 0; i < 6; i++) {
    sizes[i] = (Math.random() * 15.12 + 8.02).toFixed(2);
  }
  return sizes;
};

const Home = () => {
  const letterClass = "text-animate";
  const [fontSizes, setFontSizes] = useState([...hardFontSizer()]);
  useEffect(() => {
    const loop1 = setInterval(() => setFontSizes([...hardFontSizer()]), 3000);
    hardFontSizer();

    return () => {
      clearInterval(loop1);
    };
  }, []);
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
    <div>
      <div className="container home-page">
        <div className="text-zone">
          <h1 className="nonSelectable">
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
          <h2 className="nonSelectable">
            Spring Boot | Next.js | Node.js | ML | UI/UX
            <span
              style={{
                marginLeft: "5px",
                color: "blueviolet",
                fontSize: `${fontSizes[0]}px`,
              }}
              id="text0"
            >
              r
            </span>
            <span
              id="text1"
              style={{ color: "red", fontSize: `${fontSizes[1]}px` }}
            >
              o
            </span>
            <span
              id="text2"
              style={{ color: "whitesmoke", fontSize: `${fontSizes[2]}px` }}
            >
              O
            </span>
            <span
              id="text3"
              style={{ color: "greenyellow", fontSize: `${fontSizes[3]}px` }}
            >
              k
            </span>
            <span
              id="text4"
              style={{
                marginLeft: "5px",
                color: "peru",
                fontSize: `${fontSizes[4]}px`,
              }}
            >
              İ
            </span>
            <span
              id="text5"
              style={{
                marginLeft: "5px",
                color: "yellow",
                fontSize: `${fontSizes[5]}px`,
              }}
            >
              e
            </span>
            <span style={{ fontSize: "8px", letterSpacing: "initial" }}>
              (might be real funny. I indeed am learning)
            </span>
            <span style={{ color: "#0000", fontSize: "25px" }}>yeargun</span>
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
