'use client'/**/
// import React, { useState } from "react";
import styles from "./Portfolio.module.scss";

const Page = () => {
    return (
        <div className={styles.pdfWrap}>
            <object
                className={styles.pdf}
                data="/assets/CV.pdf"
                width="780em"
                height="990em"
            ></object>
        </div>
    );
};

export default Page;
