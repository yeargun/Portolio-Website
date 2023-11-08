import {
  faPython,
  faJava,
  faGitAlt,
  faNodeJs,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./pageabout.module.scss";
import AnimatedLetters from "@components/AnimatedLetters/AnimatedLetters";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const HardSpinningCube = () => {
  return (
    <div className={styles.stageCubeCont}>
      <div className={styles.cubespinner}>
        <div className={styles.face1}>
          <FontAwesomeIcon icon={faPython} color="#DD0031" />
        </div>
        <div className={styles.face2}>
          <FontAwesomeIcon icon={faJava} color="#F06529" />
        </div>
        <div className={styles.face3}>
          <FontAwesomeIcon icon={faNodeJs} color="#28A4D9" />
        </div>
        <div className={styles.face4}>
          <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
        </div>
        <div className={styles.face5}>
          <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
        </div>
        <div className={styles.face6}>
          <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <div className={styles.textZoneAbout}>
        <h1 >
           <AnimatedLetters
            letterClass="textAnimate"
            strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
            idx={15}
          />
        </h1>
        <p >I like to get things done.</p>
        <p  >
          Chill and confident person. I enjoy spending time with my friends and
          family.
        </p>
        <p  >
          I like gym, ski, coffee, humuor, sometimes I do nerd sh*t. I am quite
          an interesting personality in that sense.
        </p>
      </div>
       <HardSpinningCube />
    </>
  );
};

export default About;
