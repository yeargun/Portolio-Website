"use client";
import styles from "./Sidebar.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faSuitcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ThemeGod from "components/ThemeGod/ThemeGod";

const SideBar = () => (
  <nav className={styles.navBar}>
    <ThemeGod />
    <div className={styles.hoverable}>
      <Link
        exact="true"
        activeclassname="active"
        className={styles.homeLink}
        href="/"
      >
        <FontAwesomeIcon icon={faHome} color="#ffffff" />
      </Link>
      <Link activeclassname="active" className={styles.aboutLink} href="/about">
        <FontAwesomeIcon icon={faUser} color="#ffffff" />
      </Link>
      <Link
        activeclassname="active"
        className={styles.portfolioLink}
        href="/portfolio"
      >
        <FontAwesomeIcon icon={faSuitcase} color="#ffffff" />
      </Link>
      <Link
        activeclassname="active"
        className={styles.contactLink}
        href="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#ffffff" />
      </Link>
    </div>
    <div className={styles.socialNavButtonsWrapper}>
      <a
        href="https://www.linkedin.com/in/yeargun/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} color="#ffffff" />
      </a>

      <a href="https://github.com/yeargun" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} color="#ffffff" />
      </a>
    </div>
  </nav>
);
export default SideBar;
