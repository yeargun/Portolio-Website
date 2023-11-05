import styles from "./animatedletters.module.scss";

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${styles[letterClass]} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
