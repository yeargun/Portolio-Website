import { useState, useLayoutEffect } from "react";
import "./index.scss";

const SideBlog = ({ currPage }) => {
  const [fileData, setFileData] = useState([]);
  const [selectedPage, setSelectedPage] = useState(currPage);

  useLayoutEffect(() => {
    fetch("/blogPosts/metaD.txt")
      .then((res) => res.text())
      .then((text) => {
        setFileData(text.split("\n"));
      });
  }, []);

  const hasPrev = currPage > 0;
  const hasNext = currPage < Math.floor(fileData?.length / 10);

  return (
    <div className="sideBlogWrapper">
      <ul>
        {fileData?.slice(currPage * 10, currPage * 10 + 10)?.map((val, ind) => {
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
      {fileData?.length > 10 && (
        <div className="nextPageThing">
          {currPage == 0 && (
            <>
              <div style={{ color: "#0000", userSelect: "none" }}>0</div>
              <div style={{ color: "#0000", userSelect: "none" }}>0</div>
            </>
          )}
          {currPage == 1 && (
            <>
              <div style={{ color: "#0000", userSelect: "none" }}>0</div>
              <a href="/">{0}</a>
            </>
          )}
          {currPage > 1 && (
            <>
              <a href="/">{0}</a>
              <a href={`/p/${currPage - 1}`}>{currPage - 1}</a>
            </>
          )}
          <input
            type="number"
            className="enterPageNum"
            min="0"
            step="1"
            value={selectedPage}
            onChange={(e) => setSelectedPage(e.target.value)}
            max={Math.floor(fileData?.length / 10)}
            style={{
              width: `${Math.max(selectedPage?.toString()?.length, 1)}ch`,
            }}
          />
          {currPage == Math.floor(fileData?.length / 10) && (
            <>
              <div style={{ color: "#0000", userSelect: "none" }}>0</div>
              <div style={{ color: "#0000", userSelect: "none" }}>0</div>
            </>
          )}
          {currPage + 1 == Math.floor(fileData?.length / 10) && (
            <>
              <a href={`/p/${currPage + 1}`}>{currPage + 1}</a>
              <div style={{ color: "#0000", userSelect: "none" }}>0</div>
            </>
          )}
          {currPage + 1 < Math.floor(fileData?.length / 10) && (
            <>
              <a href={`/p/${currPage + 1}`}>{currPage + 1}</a>
              <a href={`/p/${Math.floor(fileData?.length / 10)}`}>
                {Math.floor(fileData?.length / 10)}
              </a>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SideBlog;
