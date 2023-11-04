'use client'
import styles from './BlogPost.module.scss';
import { useLayoutEffect, useState } from "react";
import { marked } from "marked";
import "giscus";
import { useRouter } from 'next/navigation'
import Image from "next/image";

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
const fetchUrl = "/blogPosts/" + blogPostId + ".md";
const update =
    blogPostId?.substring(0, 2) +
    "." +
    blogPostId?.substring(2, 4) +
    "." +
    blogPostId?.substring(4);

const BlogPost = () => {
    const [text, setText] = useState("<div></div>");
    const [postName, setPostName] = useState();
    const [stargazerCount, setStargazerCount] = useState(null);
    const router = useRouter()

    //this fetch makes me very mad. Bad design but yeah whatever
    useLayoutEffect(() => {
        fetch(fetchUrl)
            .then((res) => res.text())
            .then((text) => {
                setText(text.substring(text.indexOf("\n") + 1));
                setPostName(text.substring(0, text.indexOf("\n")));
            });

        fetch("https://api.github.com/repos/yeargun/Portolio-Website")
            .then((res) => res.json())
            .then((json) => setStargazerCount(json?.stargazers_count));
    }, []);

    return (
        <div className={styles.blogPage}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122.88 108.06"
                fill="#393939"
                stroke="white"
                className={styles.backArrow}
                width="3em"
                height="3em"
                onClick={() => router.back()}
            >
                <path d="M63.94,24.28a14.28,14.28,0,0,0-20.36-20L4.1,44.42a14.27,14.27,0,0,0,0,20l38.69,39.35a14.27,14.27,0,0,0,20.35-20L48.06,68.41l60.66-.29a14.27,14.27,0,1,0-.23-28.54l-59.85.28,15.3-15.58Z" />
            </svg>
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
            <div className={styles.editStarWrapper}>
                <a
                    className={styles.editThisPageButton}
                    target="_blank"
                    href={`https://github.com/yeargun/Portolio-Website/blob/master/public/blogPosts/${blogPostId}.md`}
                >
                    Edit this page
                </a>
                <a
                    className={styles.editThisPageButton}
                    target="_blank"
                    href="https://github.com/yeargun/Portolio-Website/"
                >
                    Star on GitHub
                    {(stargazerCount || stargazerCount === 0) && (
                        <>
                            <Image
                                style={{ marginLeft: "0.5em" }}
                                src="/images/github_star.svg"
                                width={20}
                                height={20}
                                onClick={() => router.back()}
                                priority={false}
                             alt={'stargazer'}/>
                            <div style={{ fontSize: "smaller" }}>{stargazerCount}</div>
                        </>
                    )}
                </a>
            </div>

            <div className={styles.gitHardComments24}>
                <giscus-widget
                    id="comments"
                    repo="yeargun/Portolio-Website"
                    repoid="R_kgDOH1Tdlg"
                    category="Announcements"
                    categoryid="DIC_kwDOH1Tdls4CaiJV"
                    mapping="pathname"
                    data-strict="0"
                    reactionsenabled="1"
                    term="Welcome"
                    emitmetadata="0"
                    inputposition="top"
                    theme={
                        localStorage.getItem("theme") === "dark"
                            ? "transparent_dark"
                            : "light"
                    }
                    lang="en"
                    loading="lazy"
                ></giscus-widget>
            </div>
        </div>
    );
};

export default BlogPost;
