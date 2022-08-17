import "./index.scss"
import {Link, NavLink} from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faUser, faSuitcase, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"

const SideBar = () => (
    <div className="nav-bar">
        
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#ffffff" />
            </NavLink>
            <NavLink activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#ffffff" />
            </NavLink>
            <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="#ffffff" />
            </NavLink>
            <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
            >
                <FontAwesomeIcon icon={faEnvelope} color="#ffffff" />
            </NavLink>
        </nav>
        <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/ali-argun-say%C4%B1lgan-362a8617a/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#ffffff" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/yeargun"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#ffffff" />
          </a>
        </li>
      </ul>
    </div>
)
export default SideBar