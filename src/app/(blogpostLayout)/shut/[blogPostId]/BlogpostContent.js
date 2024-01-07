"use client";
import { marked } from "marked";
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

const blogPostId =
  typeof window === "undefined"
    ? undefined
    : window.location.pathname.split("/")[2];
const update =
  blogPostId?.substring(0, 2) +
  "." +
  blogPostId?.substring(2, 4) +
  "." +
  blogPostId?.substring(4);

export default function BlogpostContent({ text, postName }) {
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
