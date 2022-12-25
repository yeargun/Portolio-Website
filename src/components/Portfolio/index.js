import React, { useState } from "react";
import "./index.scss";

const Portfolio = () => {
  let adr =
    window.location.href.substring(
      0,
      window.location.href.lastIndexOf("/") + 1
    ) + Math.floor(Math.random() * 100);
  const [displayLoop, setDisplayLoop] = useState(true);
  setTimeout(() => {
    setDisplayLoop(false);
  }, 2500);
  console.log(adr);
  return (
    <div className="pdfWrap">
      <object
        className="pdf"
        data="/assets/Ali Argun Sayılgan CV.pdf"
        width="780em"
        height="990em"
      ></object>
      {displayLoop ? (
        <>
          <iframe
            style={{ position: "absolute", left: "-15em", top: "7em" }}
            width={window.innerWidth * 0.95}
            height={window.innerHeight * 0.95}
            src={adr}
            title="wiki"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <p className="text">IN CASE YOU ARE INTERESTED</p>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Portfolio;
