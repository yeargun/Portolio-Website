"use client";
import { marked } from "marked";
import { headers } from "next/headers";
import styles from "./BlogPost.module.scss";

const calculateReadingTime = (daText) => {
  const wordsPerMinute = 200;
  const plainText = daText
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = plainText.split(" ").length;
  return Math.ceil(wordCount / wordsPerMinute);
};

const fetchContent = async (fetchUrl) => {
  const res = await fetch(fetchUrl);
  const text = await res.text();
  return [
    text.substring(text.indexOf("\n") + 1),
    text.substring(0, text.indexOf("\n")),
  ];
};

export default async function BlogpostContent({ blogPostId }) {
  const headersList = headers();
  const domain = headersList.get("host") || "";
  console.log(JSON.stringify(headersList));
  const fetchUrl = "http://" + domain + "/blogPosts/" + blogPostId + ".md";
  console.log("fetchUrl", fetchUrl);

  const update =
    blogPostId?.substring(0, 2) +
    "." +
    blogPostId?.substring(2, 4) +
    "." +
    blogPostId?.substring(4);

  let text, postName;
  [text, postName] = await fetchContent(fetchUrl);

  console.log("postName", postName);

  return (
    <>
      <h1 className={styles.blogTitle}>{postName}</h1>
      <div className={styles.extraInfo}>
        <h4 className={styles.estimatedTime}>
          {text ? calculateReadingTime(text) : "..."} mins
        </h4>
        <h4 className={styles.lastUpdate}>Last update: {update}</h4>
      </div>
      <hr />
      <div
        className={styles.blogPostContent}
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      ></div>
    </>
  );
}
