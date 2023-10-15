import {
  faPython,
  faJava,
  faGitAlt,
  faNodeJs,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

const HardSpinningCube = () => {
  return (
    <div className="stage-cube-cont">
      <div className="cubespinner">
        <div className="face1">
          <FontAwesomeIcon icon={faPython} color="#DD0031" />
        </div>
        <div className="face2">
          <FontAwesomeIcon icon={faJava} color="#F06529" />
        </div>
        <div className="face3">
          <FontAwesomeIcon icon={faNodeJs} color="#28A4D9" />
        </div>
        <div className="face4">
          <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
        </div>
        <div className="face5">
          <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
        </div>
        <div className="face6">
          <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1 className="nonSelectable">
            <AnimatedLetters
              letterClass="text-animate"
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p className="nonSelectable">I like to get things done.</p>
          <p className="nonSelectable">
            Chill and confident person. I enjoy spending time with my friends
            and family.
          </p>
          <p className="nonSelectable">
            I like gym, ski, coffee, humuor, sometimes I do nerd sh*t. I am
            quite an interesting personality in that sense.
          </p>
        </div>
        <HardSpinningCube />
      </div>
    </>
  );
};

export default About;
