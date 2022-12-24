import React from "react";
import "./index.scss";

const Portfolio = () => {
  return (
    <div className="pdfWrap">
      <object
        className="pdf"
        data="/assets/Ali Argun Sayılgan CV.pdf"
        width="780em"
        height="990em"
      ></object>
    </div>
  );
};

export default Portfolio;
