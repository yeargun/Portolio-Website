import { useNavigate } from "react-router-dom";
import "./index.scss";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { marked } from "marked";

const disqus_config = () => {
  this.page.url = "https://yeargun.dev/shut";
  this.page.identifier = new Date().getTime();
};

const BlogPost = () => {
  const navigate = useNavigate();
  const [md, setMd] = useState("<div></div>");

  //this fetch makes me very mad. Bad design but yeah whatever
  useLayoutEffect(() => {
    fetch("/blogPosts/test0.md")
      .then((res) => res.text())
      .then((text) => {
        setMd(marked(text));
      });

    fetch("/blogPosts/").then((res) => console.log("@", res.text()));
  });

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
        src="./images/backArrow.png"
        width="32em"
        height="32em"
        onClick={() => navigate(-1)}
      />
      <h1 className="blogTitle">Why I have no friends (as a SWE)</h1>
      <div className="extraInfo">
        <h4 className="estimatedTime">4 mins</h4>
        <h4 className="lastUpdate">Last update: 03.04.2023</h4>
      </div>
      <hr />
      <div
        className="blogPostContent"
        dangerouslySetInnerHTML={{ __html: md }}
      ></div>
      {/* <p className="paragraph">
        Lorem ipsum Both options have their advantages and disadvantages, and
        the choice ultimately depends on the specific requirements of your
        database. Using triggers to automatically increment primary key fields
        is a common approach and can simplify the process of inserting new
        records into the database. This can also help ensure that each record
        has a unique identifier that is sequential and easy to understand.
        However, using triggers can also add complexity to your database schema
        and can make it harder to manage and maintain. On the other hand, using
        UUIDs (Universally Unique Identifiers) as primary keys can offer greater
        flexibility and scalability. UUIDs are unique identifiers that can be
        generated independently of the database, which can be useful in
        distributed systems where multiple databases need to synchronize data.
        However, using UUIDs can also result in larger storage requirements and
        slower query performance, as compared to using integer-based primary
        keys. In summary, the choice between using triggers or UUIDs as primary
        keys depends on the specific requirements of your database, such as the
        expected size of the database, the need for distributed systems, and the
        desired query performance. <br />
        <b>Reference</b>
        <a target="_blank" href="https://youtu.be/BRzFjuranQU">
          https://youtu.be/BRzFjuranQU
        </a>{" "}
        is meme. the tech lead is something of a cool person himself.
      </p> */}
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
