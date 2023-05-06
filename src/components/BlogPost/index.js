import { useNavigate } from "react-router-dom";
import "./index.scss";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { marked } from "marked";

debugger;
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

console.log("asdasdas");

const BlogPost = () => {
  const navigate = useNavigate();
  const [md, setMd] = useState("<div></div>");
  const [postName, setPostName] = useState();

  //this fetch makes me very mad. Bad design but yeah whatever
  useLayoutEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.text())
      .then((text) => {
        setMd(marked(text.substring(text.indexOf("\n") + 1)));
        setPostName(text.substring(0, text.indexOf("\n")));
      });
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
        <h4 className="estimatedTime">4 mins d</h4>
        <h4 className="lastUpdate">Last update: {update}</h4>
      </div>
      <hr />
      <div
        className="blogPostContent"
        dangerouslySetInnerHTML={{ __html: md }}
      ></div>

      <div id="disqus_thread" className="disqusThing"></div>

      <noscript>
        Please enable JavaScript to view the{" "}
        <a href="https://disqus.com/?ref_noscript">
          comments powered by Disqus.
        </a>
      </noscript>
    </div>
  );
};

export default BlogPost;
