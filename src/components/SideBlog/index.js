import { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const SideBlog = () => {
  const [fileData, setFileData] = useState([]);

  useLayoutEffect(() => {
    fetch("/blogPosts/metaD.txt")
      .then((res) => res.text())
      .then((text) => {
        setFileData(text.split("\n"));
      });
  }, []);

  return (
    <div className="sideBlogWrapper">
      <ul>
        {fileData.map((val, ind) => {
          if (val) {
            let date = val.substring(0, 11);
            let url = "/shut/" + date.replace(/\./g, "");
            let name = val.substring(11);

            return (
              <li id={ind} className="postTitleWrapper">
                <a className="postTitle" href={url}>
                  {name}
                </a>

                <p className="postLastUpdated">{date}</p>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default SideBlog;
