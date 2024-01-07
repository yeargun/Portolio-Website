"use client";
import { useState, useEffect, useCallback } from "react";
import styles from "./SideBlog.module.scss";
import { usePathname, useRouter } from "next/navigation";

const toBeAppendedElements = [];

const SideBlog = ({ currentPage = undefined, NewsletterComp }) => {
  const pathName = usePathname();
  const router = useRouter();
  const match = pathName.match(/\/p\/(\d+)/);
  const [currPage, setCurrPage] = useState(
    parseInt(currentPage || (match && match[1]) || 0)
  );
  const [fileData, setFileData] = useState([]);
  const [selectedPage, setSelectedPage] = useState(currPage || 0);

  useEffect(() => {
    fetch("/blogPosts/metaD.txt")
      .then((res) => res.text())
      .then((text) => {
        const fileData = text.split("\n");
        setFileData(fileData);
        fileData?.slice(currPage * 10, currPage * 10 + 10)?.map((val, ind) => {
          if (val) {
            let date = val.substring(0, 10);
            let url = "/blogPosts/" + date.replace(/\./g, "") + ".md";

            const linkElement = document.createElement("link");

            linkElement.rel = "prefetch";
            linkElement.href = url;
            linkElement.as = "fetch";
            linkElement.setAttribute("key", url);
            toBeAppendedElements.push(linkElement);
          }
        });
        document.head.append(...toBeAppendedElements);
      });
  }, []);

  const handlePageChange = useCallback((pageNum) => {
    setCurrPage(parseInt(pageNum));
    router.push(`/p/${pageNum}`, undefined, { shallow: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEnter = useCallback(
    (e) => {
      if (e.key === "Enter") {
        handlePageChange(selectedPage);
      }
    },
    [handlePageChange, selectedPage]
  );

  return (
    <div className={styles.sideBlogWrapper}>
      <ul>
        {fileData?.slice(currPage * 10, currPage * 10 + 10)?.map((val, ind) => {
          if (val) {
            let date = val.substring(0, 11);
            let url = "/shut/" + date.replace(/\./g, "");
            let name = val.substring(11);
            return (
              <li id={ind} key={name} className={styles.postTitleWrapper}>
                <a className={styles.postTitle} href={url}>
                  {name}
                </a>

                <p className={styles.postLastUpdated}>{date}</p>
              </li>
            );
          }
        })}
      </ul>
      {fileData?.length > 10 && (
        <div className={styles.nextPageThing}>
          {currPage == 0 && ( // to fill in the space
            <>
              <div style={{ color: "#0000", userSelect: "none" }}>0</div>
              <div style={{ color: "#0000", userSelect: "none" }}>0</div>
            </>
          )}
          {currPage == 1 && (
            <>
              <div style={{ color: "#0000", userSelect: "none" }}>0</div>
              <div onClick={() => handlePageChange(0)}>0</div>
            </>
          )}
          {currPage > 1 && (
            <>
              <div onClick={() => handlePageChange(0)}>0</div>
              <div onClick={() => handlePageChange(currPage - 1)}>
                {currPage - 1}
              </div>
            </>
          )}
          <input
            type="number"
            className={styles.enterPageNum}
            min="0"
            step="1"
            value={selectedPage}
            onChange={(e) => setSelectedPage(e.target.value)}
            max={Math.floor(fileData?.length / 10)}
            style={{
              width: `${Math.max(selectedPage?.toString()?.length, 1)}ch`,
            }}
            onKeyPress={handleEnter}
          />
          {currPage == Math.floor(fileData?.length / 10) && (
            <>
              <div style={{ color: "#0000", userSelect: "none" }}>0</div>
              <div style={{ color: "#0000", userSelect: "none" }}>0</div>
            </>
          )}
          {currPage + 1 == Math.floor(fileData?.length / 10) && (
            <>
              <div onClick={() => handlePageChange(currPage + 1)}>
                {currPage + 1}
              </div>
              <div style={{ color: "#0000", userSelect: "none" }}>0</div>
            </>
          )}
          {currPage + 1 < Math.floor(fileData?.length / 10) && (
            <>
              <div onClick={() => handlePageChange(currPage + 1)}>
                {currPage + 1}
              </div>
              <div
                onClick={() =>
                  handlePageChange(Math.floor(fileData?.length / 10))
                }
              >
                {Math.floor(fileData?.length / 10)}
              </div>
            </>
          )}
        </div>
      )}
      {NewsletterComp && <NewsletterComp />}
    </div>
  );
};

export default SideBlog;
