import { useNavigate } from "react-router-dom";
import "./index.scss";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { marked } from "marked";
import "giscus";

const calculateReadingTime = (daText) => {
  const wordsPerMinute = 200;
  const plainText = daText
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = plainText.split(" ").length;
  return Math.ceil(wordCount / wordsPerMinute);
};

const blogPostId = window.location.pathname.split("/")[2];
const disqus_config = () => {
  this.page.url = window.location.pathname;
  this.page.identifier = blogPostId;
};
const fetchUrl = "/blogPosts/" + blogPostId + ".md";
const update =
  blogPostId?.substring(0, 2) +
  "." +
  blogPostId?.substring(2, 4) +
  "." +
  blogPostId?.substring(4);

const BlogPost = () => {
  const navigate = useNavigate();
  const [md, setMd] = useState("<div></div>");
  const [postName, setPostName] = useState();
  const [approximateTime2Read, setApproximateTime2Read] = useState();
  const [stargazerCount, setStargazerCount] = useState(null);

  //this fetch makes me very mad. Bad design but yeah whatever
  useLayoutEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.text())
      .then((text) => {
        setMd(marked(text.substring(text.indexOf("\n") + 1)));
        setApproximateTime2Read(calculateReadingTime(text));
        setPostName(text.substring(0, text.indexOf("\n")));
      });

    fetch("https://api.github.com/repos/yeargun/Portolio-Website")
      .then((res) => res.json())
      .then((json) => setStargazerCount(json?.stargazers_count));
  }, []);

  (function () {
    var d = document,
      s = d.createElement("script");
    s.src = "https://yeargun.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);
  })();

  return (
    <div className="blogPage">
      <img
        className="backArrow"
        src="/images/backArrow.png"
        width="32em"
        height="32em"
        onClick={() => navigate(-1)}
      />
      <h1 className="blogTitle">{postName}</h1>
      <div className="extraInfo">
        <h4 className="estimatedTime">
          {approximateTime2Read || "..."} mins d
        </h4>
        <h4 className="lastUpdate">Last update: {update}</h4>
      </div>
      <hr />
      <div
        className="blogPostContent"
        dangerouslySetInnerHTML={{ __html: md }}
      ></div>

      {/*  DISQUS COMMENT SECTION 
      <div id="disqus_thread" className="disqusThing"></div>

      <noscript>
        Please enable JavaScript to view the{" "}
        <a href="https://disqus.com/?ref_noscript">
          comments powered by Disqus.
        </a>
      </noscript> */}
      <div className="editStarWrapper">
        <a
          className="editThisPageButton"
          target="_blank"
          href={`https://github.com/yeargun/Portolio-Website/blob/master/public/blogPosts/${blogPostId}.md`}
        >
          Edit this page
        </a>
        <a
          className="editThisPageButton"
          target="_blank"
          href="https://github.com/yeargun/Portolio-Website/"
        >
          Star on GitHub
          {(stargazerCount || stargazerCount === 0) && (
            <>
              <img
                style={{ marginLeft: "0.5em" }}
                src="/images/github_star.svg"
                width="20em"
                height="20em"
                onClick={() => navigate(-1)}
              />
              <div style={{ fontSize: "smaller" }}>{stargazerCount}</div>
            </>
          )}
        </a>
      </div>

      <div className="gitHardComments24">
        <giscus-widget
          id="comments"
          repo="yeargun/Portolio-Website"
          repoid="R_kgDOH1Tdlg"
          category="Announcements"
          categoryid="DIC_kwDOH1Tdls4CaiJV"
          mapping="pathname"
          data-strict="0"
          reactionsenabled="1"
          term="Welcome to giscus!"
          emitmetadata="0"
          inputposition="top"
          theme="light"
          lang="en"
          loading="lazy"
          crossorigin="anonymous"
        ></giscus-widget>
      </div>
    </div>
  );
};

export default BlogPost;
