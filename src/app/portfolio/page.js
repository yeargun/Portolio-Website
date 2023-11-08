"use client";
import { useState, useLayoutEffect } from 'react'
import styles from "./Portfolio.module.scss";



const Page = () => {
    const[sizes, setSizes] = useState(null)
    useLayoutEffect(() => {
        const getPdfSizes = (innerWidth, innerHeight) => {
            if(!innerHeight || !innerWidth ) return undefined;
            const isMobileDevice = window?.matchMedia("(max-width: 970px)").matches;
            if(isMobileDevice) return {width: innerHeight*8.5*9/16, height: innerHeight*8.5}
            else return {width: innerHeight, height: innerHeight}
        }
        setSizes(getPdfSizes(window?.innerWidth, window?.innerHeight))
    }, []);
    return (
        <div className={styles.pdfWrap}>
            {
                sizes && (
                    <object
                        className={styles.pdf}
                        data="/assets/CV.pdf"
                        type="application/pdf"
                        width={sizes && `${sizes?.width}px`}
                        height={sizes && `${sizes?.height}px`}
                    >
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p className={styles.noPdfOpener}>It appears you don't have a PDF plugin for this browser. No biggie... you can click <a href="/assets/CV.pdf">here</a>  to download the PDF file.</p>
                    </object>
                )
            }
        </div>
    );
};

export default Page;
