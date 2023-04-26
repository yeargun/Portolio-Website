import { useState } from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const SideBlog = () => {
  const [xd, setXd] = useState("");

  return (
    <div className="blogWrapper">
      {/* <h1 style={{ color: "black", userSelect: "none" }}>blog</h1> */}
      <ul>
        <li className="postTitleWrapper">
          <a className="postTitle" href="/shut">
            why have I made this static site with react
          </a>

          <p className="postLastUpdated">03.04.2023</p>
        </li>
        <li className="postTitleWrapper">
          <a className="postTitle" href="/shut">
            Opinions on travelling alone
          </a>

          <p className="postLastUpdated">04.04.2023</p>
        </li>
        <li className="postTitleWrapper">
          <a className="postTitle" href="/shut">
            Why I'm not using Pelican
          </a>

          <p className="postLastUpdated">04.04.2023</p>
        </li>
      </ul>
    </div>
  );
};

export default SideBlog;
