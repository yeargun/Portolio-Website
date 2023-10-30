import "./index.scss";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faSuitcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ThemeGod from "../ThemeGod";

const SideBar = () => (
  <nav className="nav-bar">
    <ThemeGod />
    <div className="hoverable">
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#ffffff" />
      </NavLink>
      <NavLink activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#ffffff" />
      </NavLink>
      <NavLink
        activeclassname="active"
        className="portfolio-link"
        to="/portfolio"
      >
        <FontAwesomeIcon icon={faSuitcase} color="#ffffff" />
      </NavLink>
      <NavLink activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#ffffff" />
      </NavLink>
    </div>
    <div className="socialNavButtonsWrapper">
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
