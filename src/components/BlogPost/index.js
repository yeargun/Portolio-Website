import { useNavigate } from "react-router-dom";

import "./index.scss";

const BlogPost = () => {
  const navigate = useNavigate();

  return (
    <div className="blogPage">
      <img
        className="backArrow"
        src="./images/backArrow.png"
        width="32em"
        height="32em"
        onClick={() => navigate(-1)}
      />
      <h1 className="blogTitle">Why I have no friends (as a Junior SWE)</h1>
      <div className="extraInfo">
        <h4 className="estimatedTime">4 mins</h4>
        <h4 className="lastUpdate">Last update: 03.04.2023</h4>
      </div>
      <hr />
      <p className="paragraph">
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
      </p>
    </div>
  );
};

export default BlogPost;
