'use client'
import {useState, useEffect, useCallback} from "react";
import styles  from "./SideBlog.module.scss";
import {usePathname, useRouter} from "next/navigation";

const SideBlog = ({ currentPage = undefined}) => {
    const pathName = usePathname();
    const router = useRouter()
    const match = pathName.match(/\/p\/(\d+)/);
    const [currPage, setCurrPage] = useState(parseInt(currentPage || match && match[1] || 0))
    const [fileData, setFileData] = useState([]);
    const [selectedPage, setSelectedPage] = useState(currPage || 0);

    console.log('Sideblogg rn')
    useEffect(() => {
        console.log('Sideblogg useeff')

        fetch("/blogPosts/metaD.txt")
            .then((res) => res.text())
            .then((text) => {
                setFileData(text.split("\n"));
            });
    }, []);

    const hasPrev = currPage > 0;
    const hasNext = currPage < Math.floor(fileData?.length / 10);

    const handlePageChange = useCallback((pageNum) => {
        setCurrPage(parseInt(pageNum))
        router.push(`/p/${pageNum}`, undefined, { shallow: true })
    }, [])

    const handleEnter = useCallback((e)=>{
            if (e.key === 'Enter'){
                handlePageChange(selectedPage)
            }
    },[selectedPage])

    return (
        <div className={styles.sideBlogWrapper}>
            <ul>
                {fileData?.slice(currPage * 10, currPage * 10 + 10)?.map((val, ind) => {
                    if (val) {
                        let date = val.substring(0, 11);
                        let url = "/shut/" + date.replace(/\./g, "");
                        let name = val.substring(11);

                        return (
                            <li id={ind} className={styles.postTitleWrapper}>
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
                            <div onClick={() => handlePageChange(currPage - 1)}>{currPage - 1}</div>
                       {/*     <a href="/">{0}</a>
                            <a href={`/p/${currPage - 1}`}>{currPage - 1}</a>*/}
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
                            <div onClick={() => handlePageChange(currPage + 1)}>{currPage + 1}</div>
                            {/*<a href={`/p/${currPage + 1}`}>{currPage + 1}</a>*/}
                            <div style={{ color: "#0000", userSelect: "none" }}>0</div>
                        </>
                    )}
                    {currPage + 1 < Math.floor(fileData?.length / 10) && (
                        <>
                            <div onClick={() => handlePageChange(currPage + 1)}>{currPage + 1}</div>
                            <div onClick={() => handlePageChange(Math.floor(fileData?.length / 10))}>{Math.floor(fileData?.length / 10)}</div>

                            {/*<a href={`/p/${currPage + 1}`}>{currPage + 1}</a>
                            <a href={`/p/${Math.floor(fileData?.length / 10)}`}>
                                {Math.floor(fileData?.length / 10)}
                            </a>*/}
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default SideBlog;
